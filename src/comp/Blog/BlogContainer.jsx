export default ({
  columns,
  children
}) =>
  <div className={`blogcontainer ${columns}`}>
    {children.slice(0, 6)}
  </div>
