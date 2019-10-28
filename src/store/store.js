import initialState from "./initialState";
import rootReducer from "../reducers/root";
import { createStore } from "redux";

// Now we make a store

const store = createStore(rootReducer, initialState);

export default store;
