'use strict'

const gulp = require('gulp')
const babelify = require('babelify')
const browserify = require('browserify')
const watchify = require('watchify')
const chalk = require('chalk')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const gutil = require('gulp-util')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const duration = require('gulp-duration')
const eslint = require('gulp-eslint')
const path = require('path')
const sass = require('gulp-sass')
const concat = require('gulp-concat')

const config = {
  browserify: {
    debug: true,
    sourceType: 'module',
    extensions: ['.js', '.jsx'],
    baseDir: './src/'
  },
  entries: {
    js: {entries: ['./src/index.jsx']},
    sw: {entries: ['./src/serviceWorker.js']}
  },
  js: {
    babelify: {
      presets: ['es2015', 'react', 'stage-0'],
      plugins: [
        [ 'transform-react-jsx', {pragma: 'h'} ]
      ]
    },
    outputDir: './www/res/js/',
    outputFile: 'bundle.js',
    serviceWorkerFile: 'sw.js',
    serviceWorkerOutputDir: './www/'
  },
  sass: {
    src: ['./style/**/*.scss', './src/**/*.scss'],
    includePaths: ['./style/'],
    outputDir: './www/res/css/',
    outputFile: 'main.css'
  },
  lint: {
    src: ['./src/**/*.js', './src/**/*.jsx', '!node_modules/**']
  },
  eslint: '.eslintrc.json'
}

function mapError(err) {
  if (err.fileName) {
    // Regular error
    gutil.log(`${chalk.red(err.name)}: ${chalk.yellow(err.fileName.replace(path.join(__dirname, '/src/js/'), ''))}
      : Line ${chalk.magenta(err.lineNumber)}
      & Column ${chalk.magenta(err.columnNumber || err.column)}
      : ${chalk.blue(err.description)}`)
  } else {
    // Browserify error..
    gutil.log(`${chalk.red(err.name)}: ${chalk.yellow(err.message)}`)
  }
}

gulp.task('frontend:watch', ['frontend:js', 'frontend:sw'])

gulp.task('frontend:js', () => {
  const bundle = (bundler) => {
    const bundleTimer = duration('Javascript bundle time')
    const sourceTimer = duration('Sourcemap bundle time')
    bundler
      .bundle()
      .on('error', mapError)
      .pipe(source('main.jsx'))
      .pipe(bundleTimer)
      .pipe(buffer())
      .pipe(rename(config.js.outputFile))
      .once('data', sourceTimer.start)
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./map'))
      .pipe(sourceTimer)
      .pipe(gulp.dest(config.js.outputDir))
  }
  const args = Object.assign({}, watchify.args, config.browserify, config.entries.js)
  const bundler = browserify(args)
    .plugin(watchify, {ignoreWatch: ['**/node_modules/**', '**/bower_components/**']})
    .transform(babelify, config.js.babelify)
  bundle(bundler)
  bundler.on('update', () => {
    bundle(bundler)
  })
  return bundler
})

gulp.task('frontend:sw', () => {
  const bundle = (bundler) => {
    const swTimer = duration('ServiceWorker bundle time')
    bundler
      .bundle()
      .on('error', mapError)
      .pipe(source('main.jsx'))
      .pipe(swTimer)
      .pipe(buffer())
      .pipe(rename(config.js.serviceWorkerFile))
      .once('data', swTimer.start)
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./map'))
      .pipe(gulp.dest(config.js.serviceWorkerOutputDir))
  }
  const args = Object.assign({}, watchify.args, config.browserify, config.entries.sw)
  const bundler = browserify(args)
    .plugin(watchify, {ignoreWatch: ['**/node_modules/**', '**/bower_components/**']})
    .transform(babelify, config.js.babelify)
  bundle(bundler)
  bundler.on('update', () => {
    bundle(bundler)
  })
  return bundler
})

gulp.task('sass', () =>
  gulp.src(config.sass.src)
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sass({includePaths: config.sass.includePaths}).on('error', sass.logError))
  .pipe(concat(config.sass.outputFile))
  .pipe(sourcemaps.write('./map'))
  .pipe(gulp.dest(config.sass.outputDir)))

gulp.task('sass:watch', () =>
  gulp.watch('./src/**/*.scss', ['sass'])
  .on('change', (event) => {
    gutil.log(`File ${event.path} was ${event.type}, running tasks...`)
  }))

gulp.task('lint', () =>
  gulp.src(config.lint.src)
    .pipe(eslint())
    .pipe(eslint.results((results) => {
      // Called once for all ESLint results.
      gutil.log(`Total Results: ${results.length}`)
      gutil.log(`Total Warnings: ${results.warningCount}`)
      gutil.log(`Total Errors: ${results.errorCount}`)
    }))
    .pipe(eslint.formatEach())
    .pipe(eslint.failOnError()))

gulp.task('lint:watch', () =>
  gulp.watch('./src', ['lint']))

gulp.task('default', ['lint', 'frontend:watch', 'sass:watch'])
