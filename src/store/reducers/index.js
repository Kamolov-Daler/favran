import { combineReducers } from "redux";
import { categoriesReducer } from "./categories";
import { mainReducer } from './main';

export const reducer = combineReducers({
	categoriesReducer,
	mainReducer,
});