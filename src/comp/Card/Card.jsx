import {pushState} from '../shared/history';
import {stateWrapper} from '../wrappers';

const Card = ({
  key,
  title,
  summary,
  img,
  url,
  count
}) =>
  <div className="card" style={{backgroundImage: `url(${img.src})`}} onClick={() => pushState(url)}>
    <div className="card--content">
      <div className="card--title">
        {title} {count}
      </div>
      <div className="card--summary">
        {summary}
      </div>
    </div>
  </div>;

export default stateWrapper(state => ({count: state.blockActions.count}))(Card);