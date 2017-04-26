import {BgImg} from '../shared';

export default (props) => {
  return(
    <div className="blogblock" style={{backgroundImage: `url(${props.img.src})`}}>
      <div className="blogblock--content">
        <div className="blogblock--title">
          {props.title}
        </div>
        <div className="blogblock--summary">
          {props.summary}
        </div>
      </div>
    </div>
  );
}