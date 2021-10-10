import { apiUrl } from '../../config';

export const SET_BANNERS = "SET_BANNERS";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_TOP_CATEGORIES_WITH_GOODS = "SET_TOP_CATEGORIES_WITH_GOODS";
export const SET_LOADER = "SET_LOADER";
export const SET_SOCIALS_LIST = "SET_SOCIALS_LIST";

export const getMainInfo = () => {
	return async function (dispatch) {
		try {
			dispatch({ type: SET_LOADER, payload: true })
			const response = await fetch(apiUrl);
			const responseJson = await response.json();
			dispatch({ type: SET_BANNERS, payload: responseJson.banners })
			dispatch({ type: SET_CATEGORIES, payload: responseJson.categories })
			dispatch({ type: SET_TOP_CATEGORIES_WITH_GOODS, payload: responseJson.topCategories })
			dispatch({ type: SET_LOADER, payload: false })
		}
		catch (e) {
			console.log(e);
			dispatch({ type: SET_LOADER, payload: false })
		}
	}
}

export const getSocialList = () => {
	return async function (dispatch) {
		try {
			dispatch({ type: SET_LOADER, payload: true })
			const response = await fetch(`${apiUrl}socials`);
			const responseJson = await response.json();
			dispatch({ type: SET_SOCIALS_LIST, payload: responseJson })
			dispatch({ type: SET_LOADER, payload: false })
		}
		catch (e) {
			console.log(e);
			dispatch({ type: SET_LOADER, payload: false })
		}
	}
}