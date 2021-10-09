import { SET_LOADER } from './main'
import { apiUrl } from '../../config';

export const SET_SELECT_ITEM = "SET_SELECT_ITEM";
export const SET_CARDS_LIST = "SET_CARDS_LIST";


export const getCategoriesListById = (id) => {
	return async function (dispatch) {
		try {
			dispatch({ type: SET_LOADER, payload: true })
			const response = await fetch(`${apiUrl}goods/${id}?page=1&limit=1000`);
			const responseJson = await response.json();
			dispatch({ type: SET_CARDS_LIST, payload: responseJson.goods })
			dispatch({ type: SET_LOADER, payload: false })
		}
		catch (e) {
			console.log(e);
			dispatch({ type: SET_LOADER, payload: false })
			dispatch({ type: SET_CARDS_LIST, payload: [] })
		}
	}
}

export const addView = (id) => {
	return async function (dispatch) {
		try {
			const response = await fetch(`${apiUrl}view/${id}`, { method: "POST", body: {} });
			const responseJson = await response.json();
		}
		catch (e) {
			console.log(e);
		}
	}
}