import { Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from 'react';
import CategoryCard from '../Cards/CategoryCard/CategoryCard';

const useStyles = makeStyles((theme) => ({
	categoryTitle: {
		color: '#707070',
		fontSize: '20px',
		fontWeight: 600,
		textAlign: 'center',
		padding: '20px',
	},
	cardElem: {
		paddingBottom: '40px',
	}
}));

const Category = () => {
	const classes = useStyles();
	const [val, setVal] = useState(0);
	const [arr, setArr] = useState([
		{
			id: 1,
			bool: false,
		},
		{
			id: 2,
			bool: false,
		},
		{
			id: 3,
			bool: false,
		},
		{
			id: 4,
			bool: false,
		},
		{
			id: 5,
			bool: false,
		},
		{
			id: 6,
			bool: false,
		},
		{
			id: 7,
			bool: false,
		},
		{
			id: 8,
			bool: false,
		},
		{
			id: 9,
			bool: false,
		},
		{
			id: 10,
			bool: false,
		},
		{
			id: 11,
			bool: false,
		},
		{
			id: 12,
			bool: false,
		},
		{
			id: 13,
			bool: false,
		},
		{
			id: 14,
			bool: false,
		},
	])

	return (
		<Container>
			<h1 className={classes.categoryTitle}>Все скидки по категории "Одежда"</h1>

			<Grid container>
				{arr.map((item, idx) =>
					<Grid key={idx} item xs={12} sm={6} md={4} lg={3} onClick={() => setVal(item.id === val ? 0 : item.id)} className={classes.cardElem}>
						<CategoryCard bool={item.id === val ? true : false} />
					</Grid>
				)}
			</Grid>
		</Container>
	)
}

export default Category;