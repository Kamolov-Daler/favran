import { Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import insta from '../../../assets/instagramm.svg'
import eye from '../../../assets/eye.svg';
import king from '../../../assets/king.svg';

import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import '../../../App.css'

import styles from '../Card.module.css'

// swiper style
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar, Keyboard]);

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		height: 320,
		width: 220,
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
		marginTop: '5px',
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
	},
	cardTop: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: '-5px',
		top: '-10px',
		zIndex: 3,
		'& img': {
			width: 80,
			height: 80,
		},
	},
}));


const CategoryCard = ({ bool }) => {
	const classes = useStyles();

	const options = {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: { clickable: true },
	};

	return (
		<div className={styles.card}>
			<div className={bool ? styles.frontActive : styles.front}>
				<div className={classes.cardContainer}>
					<div>
						<Swiper {...options}>
							<SwiperSlide className={classes.cardImg}>
								<img src={insta} alt="insta" />
							</SwiperSlide>
							<SwiperSlide className={classes.cardImg}>
								<img src={insta} alt="insta" />
							</SwiperSlide>
							<SwiperSlide className={classes.cardImg}>
								<img src={insta} alt="insta" />
							</SwiperSlide>
						</Swiper>
					</div>
					<div className={classes.cardTitle}>кожанные туфли, Armani</div>
					<div className={classes.cardPrice}>2000c 1500c</div>
					<div className={classes.cardDiscount}></div>
					<div className={classes.cardDiscountPercent}>25%</div>
					<div className={classes.cardViewed}>
						<img src={eye} alt="eye" />55
					</div>
					<div className={classes.cardTop}>
						<img src={king} alt="eye" />
					</div>
				</div>
			</div>
			<div className={bool ? styles.backActive : styles.back}>
				<div className={classes.cardContainer}>
					<h1>Hello</h1>
				</div>
			</div>
		</div>
	)
}

export default CategoryCard;



// 			<div className={styles.back}>
// 				<h1>Hello</h1>
// 			</div>