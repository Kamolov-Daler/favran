import { Grid, Container, Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from 'react';
import CategoryCard from '../Cards/CategoryCard/CategoryCard';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useLocation } from 'react-router';
import { getCategoriesListById, SET_CARDS_LIST, SET_SELECT_ITEM } from '../../store/action/categories';
import { getSearchList, SEARCH_GOODS_LIST } from '../../store/action/search';

const useStyles = makeStyles((theme) => ({
	categoryTitle: {
		color: '#707070',
		fontSize: '20px',
		fontWeight: 600,
		padding: '20px',
	},
	cardElem: {
		paddingBottom: '50px',
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.up("md")]: {
			justifyContent: 'flex-start',
		},
	},
	parentContainer: {
		paddingTop: 50,
		paddingBottom: 50,
	}
}));

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const Search = () => {
	const classes = useStyles();
	const query = useQuery();
	const name = !query.get("query") ? "" : query.get("query");
	const discountAmount = !query.get("discount_amount") ? 0 : query.get("discount_amount");
	const minPrice = !query.get("min_price") ? 0 : query.get("min_price");
	const maxPrice = !query.get("max_price") ? 0 : query.get("max_price");
	const { itemSelect } = useSelector((state) => state.categoriesReducer, shallowEqual)
	const { searchProducts } = useSelector((state) => state.searchReducer, shallowEqual)
	const { loader } = useSelector((state) => state.mainReducer, shallowEqual);
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(getSearchList(name, discountAmount, minPrice, maxPrice))
		return () => {
			dispatch({ type: SEARCH_GOODS_LIST, payload: [] })
			dispatch({ type: SET_SELECT_ITEM, payload: 0 })
		}
	}, [name, discountAmount, minPrice, maxPrice])

	console.log(searchProducts)
	return (
		<Container className={classes.parentContainer}>

			{searchProducts?.length ?
				<Grid container>
					{searchProducts?.map((item, idx) =>
						<Grid key={idx} item xs={12} sm={6} md={4} lg={3} className={classes.cardElem}>
							<CategoryCard item={item} bool={item.id === itemSelect ? true : false} />
						</Grid>
					)}
				</Grid>
				: <>{!loader ? <Alert severity="info">Нет товаров</Alert> : null}</>
			}
		</Container>
	)
}

export default Search;