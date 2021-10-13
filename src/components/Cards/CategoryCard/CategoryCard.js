import { Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from '../../../assets/logo.svg'
import eye from '../../../assets/eye.svg';
import king from '../../../assets/king.svg';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from '../../../config';

import styles from '../Card.module.css'

// swiper style
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { SET_SELECT_ITEM, addView } from '../../../store/action/categories';
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar, Keyboard]);

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		height: 320,
		width: 220,
		borderRadius: 8,
		position: 'relative',
		overflow: 'hidden',
		background: '#f5f5f5',
		padding: '10px',
	},
	cardContainerBack: {
		height: 320,
		width: 220,
		borderRadius: 8,
		position: 'relative',
		overflow: 'hidden',
		background: '#f5f5f5',
		padding: '10px 15px',
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
		right: '0px',
		top: '0px',
		zIndex: 3,
		'& img': {
			width: 60,
			height: 60,
		},
	},
	cardTopText: {
		border: '1px solid #F3EA64',
		color: '#F3EA64',
		textAlign: 'center',
		marginTop: '15px',
		padding: 10,
		borderRadius: '6px',
	},
	cardInfo: {
		textAlign: 'center',
		color: '#707070',
		fontWeight: 700,
		marginTop: 15,
		marginBottom: 15,
	},
	cardGoods: {
		color: '#707070',
		fontWeight: 600,
		marginBottom: 5,
	}
}));


const CategoryCard = ({ bool, item }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { itemSelect } = useSelector((state) => state.categoriesReducer, shallowEqual)

	const options = {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: { clickable: true },
	};

	const clickCard = (e) => {
		e.preventDefault();
		dispatch(itemSelect === item.id ? { type: SET_SELECT_ITEM, payload: 0 } : { type: SET_SELECT_ITEM, payload: item.id })
		dispatch(addView(item.id))
	}

	return (
		<div className={styles.card} onClick={e => clickCard(e)}>
			<div className={bool ? styles.frontActive : styles.front}>
				<div className={classes.cardContainer}>
					<div>
						{item.images?.length ?
							<Swiper {...options} >
								{item.images.map((item, idx) =>
									<SwiperSlide key={idx} className={classes.cardImg}>
										<img src={`${item.replaceAll('PNG', 'png')}`} alt="insta" />
									</SwiperSlide>
								)}
							</Swiper>
							:
							<Swiper {...options}>
								<SwiperSlide className={classes.cardImg}>
									<img src={logo} alt="insta" />
								</SwiperSlide>
							</Swiper>
						}
					</div>
					<div className={classes.cardTitle}>{item.name.length > 30 ? item.name.slice(1, 27) + "..." : item.name}</div>
					<div className={classes.cardPrice}><span style={{ textDecoration: 'line-through' }}>{item.old_price}</span> / {item.new_price}</div>
					<div className={classes.cardDiscount}></div>
					<div className={classes.cardDiscountPercent}>{item.discount_amount}%</div>
					<div className={classes.cardViewed}>
						<img src={eye} alt="eye" />{item.Views}
					</div>
					{item.is_top ?
						<div className={classes.cardTop}>
							<img src={king} alt="eye" />
						</div>
						: null
					}
				</div>
			</div>
			<div className={bool ? styles.backActive : styles.back}>
				<div className={classes.cardContainerBack}>
					{item.is_top ?
						<div className={classes.cardTopText}>
							товар в топе
						</div>
						: null
					}
					<div className={classes.cardInfo}>
						Сведенье:
					</div>
					<div className={classes.cardGoods}>
						Товар: {item.name}
					</div>
					<div className={classes.cardGoods}>
						Магазин: {item.shop_name}
					</div>
					<div className={classes.cardGoods}>
						Адрес магазина: {item.shop_address}
					</div>
					<div className={classes.cardGoods}>
						Телефон магазина: <a href={`tel:${item.shop_phone}`} onClick={(e) => e.stopPropagation()}>{item.shop_phone}</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CategoryCard;



// 			<div className={styles.back}>
// 				<h1>Hello</h1>
// 			</div>