import {connect, blockWrapper} from '../wrappers'

const Content = ({
  page
}) =>
  <div>
    {page.map(block => blockWrapper(block))}
  </div>

export default connect(state => ({
  page: state.page
}))(Content);