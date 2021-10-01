const initialState = {
  ids: [],
};

const idReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADDID":
      return {
        ...state,
        ids: [...state.ids, action.payload],
      };
    case "DELID":
      return {
        ids: [...state.ids.filter((id) => id !== action.payload)],
      };
    default:
      return state;
  }
};

export default idReducer;
