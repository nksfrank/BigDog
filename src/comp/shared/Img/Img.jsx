export default ({
  src
}) =>
  <picture>
    <source srcSet={`${src}?s=desktop`} media={`(min-width:${desktop})`} />
    <source srcSet={`${src}?s=tablet`} media={`(min-width:${tablet})`} />
    <source srcSet={`${src}?s=phone`} media={`(min-width:${phone})`} />
    <img />
  </picture>
