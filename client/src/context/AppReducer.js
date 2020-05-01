export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: [
          ...state.transactions.filter(trans => trans._id !== action.id)
        ]
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.transaction]
      };

    case "GET_TRANSACTION":
      return {
        ...state,
        loading: false,
        transactions: action.payload
      };

    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
