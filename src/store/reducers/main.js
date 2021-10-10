import { SET_BANNERS, SET_CATEGORIES, SET_LOADER, SET_SOCIALS_LIST, SET_TOP_CATEGORIES_WITH_GOODS } from '../action/main';

const initialData = {
	categories: [],
	banners: [],
	topCategories: [],
	loader: false,
	socials: null,
}

export const mainReducer = (state = initialData, action) => {
	switch (action.type) {
		case SET_BANNERS:
			return { ...state, banners: action.payload };
		case SET_CATEGORIES:
			return { ...state, categories: action.payload };
		case SET_TOP_CATEGORIES_WITH_GOODS:
			return { ...state, topCategories: action.payload };
		case SET_LOADER:
			return { ...state, loader: action.payload };
		case SET_SOCIALS_LIST:
			return { ...state, socials: action.payload };
		default:
			return state;
	}
}