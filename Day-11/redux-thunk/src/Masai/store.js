import { applyMiddleware, createStore } from "redux";
import { todoReducer } from "./todoReducer";
import {thunk} from 'redux-thunk'
export const todoReducerStore = createStore(todoReducer, applyMiddleware(thunk));
