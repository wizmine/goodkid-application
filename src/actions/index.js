import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(categoriesFetching());

      const categories = [];

      const userCollectionRef = collection(db, "categories");
      const querySnapshot = await getDocs(userCollectionRef);
      querySnapshot.forEach((doc) => {
        categories.push({ ...doc.data() });
      });

      dispatch(categoriesFetched(categories));
    } catch (err) {
      console.log(err);
      dispatch(categoriesFetchingError(err));
    }
  };
};

export const categoriesFetching = () => ({
  type: "CATEGORIES_FETCHING",
});

export const categoriesFetched = (categories) => ({
  type: "CATEGORIES_FETCHED",
  payload: categories.sort((a, b) => a.id - b.id),
});

export const categoriesFetchingError = () => ({
  type: "CATEGORIES_FETCHING_ERROR",
});

export const productAdded = (hero) => {
  return {
    type: "ADD_PRODUCT",
    payload: hero,
  };
};

export const productDeleted = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};

export const getCategoryById = (state, categoryId) => {
  const sortedCategories = [...state][categoryId - 1];
  return sortedCategories;
};

export const getProductById = (state, categoryId, productId) => {
  const category = [...state][categoryId - 1];
  if (category && category.products) {
    return category.products.find((product) => product.id === productId);
  }
  return null;
};
