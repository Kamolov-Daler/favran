import { SEARCH_GOODS_LIST } from '../action/search';

const initialData = {
	searchProducts: [],
}

export const searchReducer = (state = initialData, action) => {
	switch (action.type) {
		case SEARCH_GOODS_LIST:
			return { ...state, searchProducts: action.payload }
		default:
			return state;
	}
}