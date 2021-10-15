import { Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import '../../App.css'

import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper style
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Link } from "react-router-dom";
import MainCard from '../Cards/MainCard/MainCard';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getMainInfo, SET_BANNERS, SET_CATEGORIES, SET_TOP_CATEGORIES_WITH_GOODS } from '../../store/action/main';
import { imgUrl } from '../../config';
import { SET_SELECT_ITEM } from "../../store/action/categories";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar, Keyboard]);


const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: '20px',
		fontWeight: '600',
		color: '#707070',
		textAlign: 'center',
		marginTop: '40px',
	},
	slideItem: {
		width: '100%',
		boxSizing: 'border-box',
		borderRadius: '10px',
		overflow: 'hidden',
		'& img': {
			width: '100%',
			height: '100%',
		}
	},
	categoryBlock: {
		marginTop: 30,
	},
	categoryBlockTitle: {
		fontWeight: '600',
		fontSize: '20px',
		color: '#707070',
	},
	categoryElemList: {
		display: 'flex',
		flexDirection: 'row',
	},
	categoryElem: {
		userSelect: 'none',
		marginRight: '20px',
		display: 'flex',
		justifyContent: 'center',
		aligntItems: 'center',
		padding: "30px 0",
	},
	parentContainer: {
		paddingBottom: 40,
	},
}));

const Main = () => {
	const classes = useStyles();
	const { banners, topCategories } = useSelector((state) => state.mainReducer, shallowEqual);
	const { itemSelect, cardsList } = useSelector((state) => state.categoriesReducer, shallowEqual)
	const dispatch = useDispatch();
	const test = {
		Views: 13,
		category_id: 5,
		discount_amount: 10,
		id: 28,
		images: ["https://i.ibb.co/Jz9WPWp/shirts-3-1.jpg", "https://i.ibb.co/Jz9WPWp/shirts-3-2.jpg"],
		is_top: true,
		name: "Футболка (Турция)",
		new_price: 315,
		old_price: 350,
		shop_address: "Улица Пушкина 55",
		shop_name: "Аличон",
		shop_phone: "+992987654321",
	}


	const options = {
		autoplay: { delay: 5000 },
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: { clickable: true },
		breakpoints: {
			993: {
				slidesPerView: 2,
			},
			769: {
				slidesPerView: 1,
			},
		},
	};

	const cardOptions = (len) => {
		return {
			autoplay: { delay: 5000 },
			slidesPerView: len > 2 ? 1.5 : len,
			spaceBetween: 30,
			scrollbar: {
				hide: true,
			},
			breakpoints: {
				1080: {
					slidesPerView: len >= 5 ? 5 : len,
				},
				900: {
					slidesPerView: len >= 4 ? 4 : len,
				},
				800: {
					slidesPerView: len >= 3 ? 3 : len,
				},
				500: {
					slidesPerView: len >= 2 ? 2 : len,
				}
			},
		}

	}

	const slideList = banners.map((item, idx) => (
		<SwiperSlide key={idx}>
			<div className={classes.slideItem}>
				<img src={`${item.image_name.replaceAll('PNG', 'png')}`} alt={item.image_name} />
			</div>
		</SwiperSlide>
	));

	useEffect(() => {
		return () => {
			dispatch({ type: SET_SELECT_ITEM, payload: 0 })
		}
	}, [])

	return (
		<Container className={classes.parentContainer}>
			<h1 className={classes.title}>ТОП - скидок со всего Таджикистана</h1>
			<Swiper {...options}>
				{slideList}
			</Swiper>

			{topCategories.map((item) => {
				if (item.goods.length) {
					return <div className={classes.categoryBlock} key={item.category.id}>
						<h1 className={classes.categoryBlockTitle}>{item.category.name}</h1>
						<div className={`${classes.categoryElemList} card-scroll`}>
							<Swiper {...cardOptions(item.goods.length)} className="mySwiper">
								{item.goods.map((item, idx) =>
									<SwiperSlide key={idx} className={classes.categoryElem}>
										<MainCard bool={item.id === itemSelect ? true : false} item={item} />
									</SwiperSlide>
								)}
							</Swiper>
						</div>
					</div>
				}
			})}
		</Container>
	)
}

export default Main;