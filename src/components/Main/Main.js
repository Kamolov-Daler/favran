import { Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import '../../App.css'

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper style
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Link } from "react-router-dom";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay]);


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
		minHeight: '250px',
		backgroundColor: '#707070',
		borderRadius: '10px',
	},
	categoryBlock: {
		marginTop: 30,
	},
	categoryBlockTitle: {
		fontWeight: '600',
		fontSize: '20px',
		color: '#707070',
	}
}));

const Main = () => {
	const classes = useStyles();
	const arr = [1, 2, 3, 4];

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

	const slideList = arr.map((item, idx) => (
		<SwiperSlide key={idx}>
			<div className={classes.slideItem}></div>
		</SwiperSlide>
	));

	return (
		<Container>
			<h1 className={classes.title}>ТОП - скидок со всего Таджикистана</h1>
			<Swiper {...options}>
				{slideList}
			</Swiper>

			<div className={classes.categoryBlock}>
				<h1 className={classes.categoryBlockTitle}>Топ "Одежды"</h1>
				<div className={classes.categoryElemList}>
					<div className={classes.categoryElem}>

					</div>
				</div>
			</div>
		</Container>
	)
}

export default Main;