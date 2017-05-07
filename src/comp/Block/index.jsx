import ContentArea from '../shared/ContentArea'
import {connect} from '../wrappers'

const Block = ({
  blockActions: {
    count
  },
  name,

  increment,
  decrement
}) =>
  <div className="block">
    <span>Hello {name} {count}</span>
    <span></span>
    <div>
      <button onClick={() => decrement(5)}>Decrement</button>
      <button onClick={() => increment(5)}>Increase</button>
    </div>
  </div>;

export default connect(state => ({
  blockActions: state.blockActions,
}),
actions => ({
  increment: actions.increment,
  decrement: actions.decrement
}))(Block)