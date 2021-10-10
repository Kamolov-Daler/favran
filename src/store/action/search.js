import { apiUrl } from '../../config';
import { SET_LOADER } from './main';

export const SEARCH_GOODS_LIST = "SEARCH_GOODS_LIST";


export const getSearchList = (name, discountAmount, minPrice, maxPrice) => {
	console.log(discountAmount)
	console.log(minPrice)
	console.log(maxPrice)

	return async function (dispatch) {
		try {
			dispatch({ type: SET_LOADER, payload: true })
			const response = await fetch(`${apiUrl}search?query=${encodeURI(name)}&discount_amount=${discountAmount.toString()}&price_from=${minPrice.toString()}&price_to=${maxPrice.toString()}&page=1&limit=1000`);
			const responseJson = await response.json();
			dispatch({ type: SEARCH_GOODS_LIST, payload: responseJson.goods })
			dispatch({ type: SET_LOADER, payload: false })
		}
		catch (e) {
			console.log(e);
			dispatch({ type: SEARCH_GOODS_LIST, payload: [] })
			dispatch({ type: SET_LOADER, payload: false })
		}
	}
}