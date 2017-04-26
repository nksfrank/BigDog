import {Component} from 'preact';
import components from './components';
import {store} from '../state';

export const actionsWrapper = (actions) => (elm) =>
  React.createElement(components(elm.$componentType), {...elm, actions});

export const blockWrapper = (elm) =>
  React.createElement(components(elm.$componentType), elm);

export function stateWrapper(selector = state => state) {
  return function wrapped(Wrapped) {
    return class Connected extends Component {
      constructor(props) {
        super(props);
        this.state = selector(store.getState());
        store.subscribe(s => this.setState(Object.assign({}, selector(s)))).bind(this);
      }
      render() {
        return <Wrapped {...this.props} {...this.state} />
      }
    }
  }
}
