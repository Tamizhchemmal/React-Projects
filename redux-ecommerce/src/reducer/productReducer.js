const initialcart = [];

const productReducer = (state = initialcart, action) => {
  switch (action.type) {
    case "ADDITEM":
      const existitem = state.find((int) => int.id === action.payload.id);

      if (existitem) {
        const newstate = state.map((int) =>
          int.id === action.payload.id ? { ...int, qty: int.qty + 1 } : int
        );

        return newstate;
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }
    case "DELITEM":
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
