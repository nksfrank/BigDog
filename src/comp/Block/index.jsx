import ContentArea from '../shared/ContentArea';
import {stateWrapper} from '../wrappers';

const Block = ({
  blockActions,
  name,
  $contentArea,

  actions: {
    increment,
    decrement
  }
}) => 
  <div className="block">
    <span>Hello {name}</span>
    <span>{blockActions.count}</span>
    <div>
      <button onClick={() => increment(5)}>Increase</button>
      <button onClick={() => decrement(5)}>Decrement</button>
    </div>
    <ContentArea {...$contentArea} />
  </div>;

export default stateWrapper(state => ({
  blockActions: state.blockActions,
}))(Block);