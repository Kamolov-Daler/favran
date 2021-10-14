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

	const cardOptions = {
		autoplay: { delay: 5000 },
		slidesPerView: 1.5,
		spaceBetween: 30,
		scrollbar: {
			hide: true,
		},
		breakpoints: {
			993: {
				slidesPerView: 5,
			},
			750: {
				slidesPerView: 4,
				spaceBetween: 80,
			},
			500: {
				slidesPerView: 2,
				spaceBetween: 50,
			}
		},
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
							<Swiper {...cardOptions} className="mySwiper">
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