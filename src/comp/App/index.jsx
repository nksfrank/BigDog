import 
const App = ({store}) =>
  <Provider actions={actions} store={store}>
    <div>
      <Header />
      <Content />
    </div>
  </Provider>
