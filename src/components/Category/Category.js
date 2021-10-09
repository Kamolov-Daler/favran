import { Grid, Container, Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from 'react';
import CategoryCard from '../Cards/CategoryCard/CategoryCard';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getCategoriesListById, SET_CARDS_LIST, SET_SELECT_ITEM } from '../../store/action/categories';

const useStyles = makeStyles((theme) => ({
	categoryTitle: {
		color: '#707070',
		fontSize: '20px',
		fontWeight: 600,
		textAlign: 'center',
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
		paddingBottom: 50,
	}
}));

const Category = () => {
	const classes = useStyles();
	const { name, id } = useParams()
	const { itemSelect, cardsList } = useSelector((state) => state.categoriesReducer, shallowEqual)
	const { loader } = useSelector((state) => state.mainReducer, shallowEqual);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategoriesListById(id))
		return () => {
			dispatch({ type: SET_CARDS_LIST, payload: [] })
			dispatch({ type: SET_SELECT_ITEM, payload: 0 })
		}
	}, [name, id])


	return (
		<Container className={classes.parentContainer}>
			<h1 className={classes.categoryTitle}>{name}</h1>

			{cardsList.length ?
				<Grid container>
					{cardsList?.map((item, idx) =>
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

export default Category;