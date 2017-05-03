import React from 'preact-compat';
import preact, {h, render} from 'preact';
import {actionsWrapper} from './comp/wrappers';
import Header from './comp/Layout/Header';
import {store, actions} from './state';
import initialState from './initialstate';
import debounce from './utils/debounce';

const App = ({state, actions}) =>
  <div>
    <Header actions={actions} {...state} />
    <Content actions={actions} {...state} />
  </div>


const wrapper = actionsWrapper(actions);
const Content = ({page, actions}) =>
  <div>
    {page.map(block => wrapper(block))}
  </div>;

function r(state) {
  console.log(state);
  render(
    h(App, {state, actions}),
    document.body
  );
}

// console.log(JSON.stringify(state.page,null, 2));
store.subscribe(state => r(state));
r(store.getState());
// console.log(JSON.stringify(state.page,null, 2));
if(typeof window !== 'undefined') {
  // require('preact/devtools');
}
