import { Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import insta from '../../../assets/instagramm.svg'
import eye from '../../../assets/eye.svg';

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		height: 270,
		width: 200,
		borderRadius: 8,
		border: '1px solid rgba(81, 81, 81, 0.56)',
		position: 'relative',
		overflow: 'hidden',
		background: '#f5f5f5',
		padding: '10px',
	},
	cardImg: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& img': {
			width: '100%',
			height: '170px',
			border: '1px solid rgba(81, 81, 81, 0.56)',
			borderRadius: 8,
		},
	},
	cardTitle: {
		textAlign: 'center',
		color: '#515151',
		marginTop: '10px',
	},
	cardPrice: {
		textAlign: 'center',
		color: '#515151',
		marginTop: '10px',
		fontWeight: 600,
	},
	cardDiscount: {
		position: 'absolute',
		top: '0',
		left: '0',
		width: '0',
		height: '0',
		borderTop: '80px solid red',
		borderRight: '80px solid transparent',
		zIndex: 1,
	},
	cardDiscountPercent: {
		position: 'absolute',
		top: '10px',
		left: '10px',
		color: '#fff',
		zIndex: 2,
	},
	cardViewed: {
		color: '#515151',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: '10px',
		right: '10px',
	}
}));


const MainCard = () => {
	const classes = useStyles();
	return (
		<div className={classes.cardContainer}>
			<div className={classes.cardImg}>
				<img src={insta} alt="insta" />
			</div>
			<div className={classes.cardTitle}>кожанные туфли, Armani</div>
			<div className={classes.cardPrice}>2000c 1500c</div>
			<div className={classes.cardDiscount}></div>
			<div className={classes.cardDiscountPercent}>25%</div>
			<div className={classes.cardViewed}>
				<img src={eye} alt="eye" />55
			</div>
		</div>
	)
}

export default MainCard;