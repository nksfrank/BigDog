import {actionsWrapper} from './comp/wrappers';
import Header from './comp/Layout/Header/';
import {store, actions} from './state';
import initialState from './initialstate';
import debounce from './utils/debounce';

const App = ({state, actions}) => {
  return (
    <div>
      <Header actions={actions} {...state} />
      <Content actions={actions} {...state} />
    </div>
  )
};

const wrapper = actionsWrapper(actions);
const Content = ({page, actions}) =>
  <div>
    {page.map(block => wrapper(block))}
  </div>;

function render(state) {
  console.log(state);
  ReactDOM.render(
    React.createElement(App, {state, actions}),
    document.getElementById('container')
  );
}

// console.log(JSON.stringify(state.page,null, 2));
store.subscribe(state => render(state));
render(store.getState());
// console.log(JSON.stringify(state.page,null, 2));
if(typeof window !== 'undefined') {
  // require('preact/devtools');
  window.React = React;
}
