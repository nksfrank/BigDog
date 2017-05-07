import {BgImg} from '../shared';

export default ({
  img: {
    src
  },
  title,
  summary
}) =>
  <div className="blogblock" style={{backgroundImage: `url(${src})`}}>
    <div className="blogblock--content">
      <div className="blogblock--title">
        {title}
      </div>
      <div className="blogblock--summary">
        {summary}
      </div>
    </div>
  </div>
