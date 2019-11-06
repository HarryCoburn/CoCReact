import rootReducer from "../reducers/root";
import { createStore } from "redux";

// Now we make a store

const store = createStore(rootReducer);

export default store;
