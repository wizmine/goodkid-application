import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import { persistConfig } from "../utils/localStorage";
import categoriesReducer from "../reducers/categories";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const rootReducer = combineReducers({
  categories: persistReducer(persistConfig, categoriesReducer),
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, stringMiddleware)));

const persistor = persistStore(store);

export { store, persistor };
