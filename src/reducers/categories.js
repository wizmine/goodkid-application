const initialState = {
  categories: [],
  cartList: [],
  categoriesLoadingStatus: "",
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORIES_FETCHING":
      return {
        ...state,
        categoriesLoadingStatus: "loading",
      };
    case "CATEGORIES_FETCHED":
      return {
        ...state,
        categories: action.payload,
        categoriesLoadingStatus: "idle",
      };
    case "CATEGORIES_FETCHING_ERROR":
      return {
        ...state,
        categoriesLoadingStatus: "error",
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default categories;
