import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const compoEnhencers = composeWithDevTools();
const store = createStore(rootReducer, compoEnhencers);

export default store;
