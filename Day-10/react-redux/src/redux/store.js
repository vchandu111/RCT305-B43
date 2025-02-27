//createStore(counterReducer)

import { createStore } from "redux";
import { counterReducer } from "./counterReducer";

const counterStore = createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(counterStore.getState())

export default counterStore

