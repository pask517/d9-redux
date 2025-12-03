const initialState = {
  favourites: {
    companies: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          companies: [...state.favourites.companies, action.payload],
        },
      }
    default:
      return state
  }
}

export default mainReducer
