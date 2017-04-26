export default {
  initialState: () => ({ isOpen: false}),
  toggleMenu: (payload, state) => ({ isOpen: !state.isOpen })
}