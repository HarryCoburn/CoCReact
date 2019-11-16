import { rootReducer } from "../reducers/root";
import { createStore } from "redux";

// Now we make a store

const store = createStore(
  rootReducer,
  /* preloated state, */ window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ serialize: true })
);

export default store;
