import components from './components'

export const blockWrapper = (elm) =>
  h(components(elm.$componentType), elm)

export class Provider {
  getChildContext() {
    const { children, ...context } = this.props
    return context
  }
  render({children}) {
    return children && children[0] || null
  }
}

export function connect(selector = state => state, actions = action => action) {
  return function wrapped(Wrapped) {
    return class Connected extends Component {
      componentWillMount() {
        this.setState(Object.assign({}, selector(this.context.store.getState()), actions(this.context.actions)))
        this.context.store.subscribe(s => this.setState(selector(s)))
      }

      render = (props, state, context) => <Wrapped {...props} {...state} />
    }
  }
}
