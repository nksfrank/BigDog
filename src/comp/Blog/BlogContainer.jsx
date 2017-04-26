export default (props) =>
  <div className={blogcontainer, props.columns}>
    {props.children.slice(0, 6)}
  </div>