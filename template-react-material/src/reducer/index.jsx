export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_THEME":
      return { ...state, theme: action.payload }
    case "TOGGLE_TOOLBAR":
      return { ...state, toolbarOpen: action.payload }

    default:
      return state
  }
}
