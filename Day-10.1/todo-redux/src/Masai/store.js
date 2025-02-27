import { createStore } from "redux";
import { todoReducer } from "./todoReducer";

export const todoStore = createStore(todoReducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());
