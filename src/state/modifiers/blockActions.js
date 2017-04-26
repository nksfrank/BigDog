export default {
  initialState: () => ({count:5}),
  increment: (num, state) => ({count: state.count + num}),
  decrement: (num, state) => ({count: state.count - num})
}