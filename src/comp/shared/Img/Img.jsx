export default (props) =>
  <picture>
    <source srcset={`${props.src}?s=desktop`} media={`(min-width:${desktop})`} />
    <source srcset={`${props.src}?s=tablet`} media={`(min-width:${tablet})`} />
    <source srcset={`${props.src}?s=phone`} media={`(min-width:${phone})`} />
    <img />
  </picture>