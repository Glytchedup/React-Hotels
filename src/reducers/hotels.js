const hotel = (state, action) => {
  switch (action.type) {
    case 'ADD_HOTEL':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_HOTEL':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const hotels = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOTEL':
      return [
        ...state,
        hotel(undefined, action)
      ]
    case 'TOGGLE_HOTEL':
      return state.map(t =>
        hotel(t, action)
      )
    default:
      return state
  }
}

export default hotels
