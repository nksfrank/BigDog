import {actionsWrapper, Provider} from './comp/wrappers';
import {Header, Content} from './comp/Layout';
import {store, actions} from './state';
import initialState from './initialstate';
import debounce from './utils/debounce';

const App = ({store}) =>
  <Provider actions={actions} store={store}>
    <div>
      <Header />
      <Content />
    </div>
  </Provider>

function r(store) {
  render(
    h(App, {store}),
    document.body
  );
}

r(store);

if(typeof window !== 'undefined') {
  require('preact/devtools');
}
