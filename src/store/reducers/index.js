import { combineReducers } from "redux";
import { categoriesReducer } from "./categories";
import { mainReducer } from './main';
import { searchReducer } from './search';

export const reducer = combineReducers({
	categoriesReducer,
	mainReducer,
	searchReducer,
});