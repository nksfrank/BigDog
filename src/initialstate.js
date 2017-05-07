export default {
  appShell: {
    menu: [{
      name: 'Home',
      url: '/'
    }, {
      name: 'Blog',
      url: '/blog'
    }, {
      name: 'About',
      url: '/about'
    }],
    footer: {
    }
  },
  page: [{
    $componentType: 'block',
    key: 'b',
    name: 'World',
    $contentArea: {
      className: 'block',
      content: [{
        $componentType: 'cardContainer',
        key: 'post',
        columns: 'three',
        cards: [{
          key: 'Niklasc',
          title: 'Niklas',
          summary: 'This but the second of the set',
          url: '/1',
          img: {
            src: 'https://unsplash.it/720/480/?random'
          }
        }, {
          key: 'Niklas11',
          title: 'Niklas',
          summary: 'This is the first blog of many to come',
          img: {
            src: 'https://unsplash.it/720/480/?random=3'
          }
        }, {
          key: 'Niklas31',
          title: 'Niklas',
          summary: 'All about the threes',
          img: {
            src: 'https://unsplash.it/720/480/?random=1'
          }
        }, {
          key: 'Niklas41',
          title: 'Niklas',
          summary: 'All about the threes',
          img: {
            src: 'https://unsplash.it/720/480/?random=15'
          }
        }, {
          key: 'a1',
          title: 'Niklas1',
          summary: 'All about the threes',
          img: {
            src: 'https://unsplash.it/720/480/?random=12'
          }
        }]
      }]
    }
  }, {
    $componentType: 'cardContainer',
    key: 'post',
    columns: 'three',
    cards: [{
      key: 'Niklasc',
      title: 'Niklas',
      summary: 'This but the second of the set',
      url: '/1',
      img: {
        src: 'https://unsplash.it/720/480/?random'
      }
    }, {
      key: 'Niklas11',
      title: 'Niklas',
      summary: 'This is the first blog of many to come',
      img: {
        src: 'https://unsplash.it/720/480/?random=3'
      }
    }, {
      key: 'Niklas31',
      title: 'Niklas',
      summary: 'All about the threes',
      img: {
        src: 'https://unsplash.it/720/480/?random=1'
      }
    }, {
      key: 'Niklas41',
      title: 'Niklas',
      summary: 'All about the threes',
      img: {
        src: 'https://unsplash.it/720/480/?random=15'
      }
    }, {
      key: 'a1',
      title: 'Niklas1',
      summary: 'All about the threes',
      img: {
        src: 'https://unsplash.it/720/480/?random=12'
      }
    }]
  }, {
    $componentType: 'cardContainer',
    key: 'post',
    columns: 'three',
    cards: [{
      key: 'Niklasc',
      title: 'Niklas',
      summary: 'This but the second of the set',
      url: '/1',
      img: {
        src: 'https://unsplash.it/720/480/?random'
      }
    }, {
      key: 'Niklas11',
      title: 'Niklas',
      summary: 'This is the first blog of many to come',
      img: {
        src: 'https://unsplash.it/720/480/?random=3'
      }
    }, {
      key: 'Niklas31',
      title: 'Niklas',
      summary: 'All about the threes',
      img: {
        src: 'https://unsplash.it/720/480/?random=1'
      }
    }, {
      key: 'Niklas41',
      title: 'Niklas',
      summary: 'All about the threes',
      img: {
        src: 'https://unsplash.it/720/480/?random=15'
      }
    }, {
      key: 'a1',
      title: 'Niklas1',
      summary: 'All about the threes',
      img: {
        src: 'https://unsplash.it/720/480/?random=12'
      }
    }]
  }]
}
