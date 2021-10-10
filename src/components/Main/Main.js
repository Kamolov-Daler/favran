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
		height: '250px',
		backgroundColor: '#707070',
		border: '1px solid #707070',
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
	},
	parentContainer: {
		paddingBottom: 40,
	},
}));

const Main = () => {
	const classes = useStyles();
	const { banners, topCategories } = useSelector((state) => state.mainReducer, shallowEqual);

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
		slidesPerView: 1,
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
			},
			500: {
				slidesPerView: 2,
			}
		},
	}
	const cardOptionsAnother = (len) => {
		return {
			autoplay: { delay: 5000 },
			spaceBetween: 30,
			slidesPerView: 1,
			scrollbar: {
				hide: true,
			},
			breakpoints: {
				993: {
					slidesPerView: len,
				},
				750: {
					slidesPerView: len > 1 ? len - 1 : len,
				},
				500: {
					slidesPerView: len > 2 ? len - 2 : len,
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
							{item.goods.length < 5 ?
								<Swiper {...cardOptionsAnother(item.goods.length)} centeredSlides={false} className="mySwiper">
									{item.goods.map((item, idx) =>
										<SwiperSlide key={idx} className={classes.categoryElem}>
											<MainCard item={item} />
										</SwiperSlide>
									)}
								</Swiper>
								:
								<Swiper {...cardOptions} className="mySwiper">
									{item.goods.map((item, idx) =>
										<SwiperSlide key={idx} className={classes.categoryElem}>
											<MainCard item={item} />
										</SwiperSlide>
									)}
								</Swiper>
							}
						</div>
					</div>
				}
			})}
		</Container>
	)
}

export default Main;