import { SET_CARDS_LIST, SET_SELECT_ITEM } from '../action/categories';

const initialData = {
	itemSelect: 0,
	cardsList: [],
};

export const categoriesReducer = (state = initialData, action) => {
	switch (action.type) {
		case SET_CARDS_LIST:
			return { ...state, cardsList: action.payload }
		case SET_SELECT_ITEM:
			return { ...state, itemSelect: action.payload }
		default:
			return state;
	}
};
