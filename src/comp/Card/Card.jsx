import {pushState} from '../shared/history';
import {connect} from '../wrappers';

const Card = ({
  key,
  title,
  summary,
  img: {
    src
  },
  url,
  count
}) =>
  <div className="card" style={{backgroundImage: `url(${src})`}} onClick={() => pushState(url)}>
    <div className="card--content">
      <div className="card--title">
        {title} {count}
      </div>
      <div className="card--summary">
        {summary}
      </div>
    </div>
  </div>;

export default connect(state => ({count: state.blockActions.count}))(Card);