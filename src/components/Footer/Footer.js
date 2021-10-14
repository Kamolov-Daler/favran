import { Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import phone from '../../assets/phone-call.svg';
import instagramm from '../../assets/instagramm.svg';
import whatsapp from '../../assets/whatsapp.png';
import telegram from '../../assets/telegramm.svg';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSocialList } from '../../store/action/main';

const useStyles = makeStyles((theme) => ({
	footerContainer: {
		backgroundColor: "#F4F4F4",
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 'auto'
	},
	footerContent: {
		padding: '10px 0',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	socialGroup: {
		display: 'flex'
	},
	socialItem: {
		marginRight: '10px',
		cursor: 'pointer',
	},
	gridItem: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: '10px',
		[theme.breakpoints.up("md")]: {
			paddingBottom: '0px',
		},
	},
	copyright: {
		color: '#707070',
		fontWeight: '600'
	},
	phoneHref: {
		TextDecoration: 'none',
		color: '#000',
	}
}));

const Footer = () => {
	const classes = useStyles();
	const dispatch = useDispatch()
	const { socials } = useSelector((state) => state.mainReducer, shallowEqual);

	useEffect(() => {
		dispatch(getSocialList())
	}, [])

	return (
		<div className={classes.footerContainer}>
			<Container>
				<Grid container className={classes.footerContent}>
					<Grid item xs={12} md={4} className={classes.gridItem}>
						<div>Наши контакты:<a href={`tel:${socials?.number}`} className={classes.phoneHref}> {socials?.number}</a></div>
					</Grid>
					<Grid item xs={12} md={4} className={classes.gridItem}>
						<div className={classes.copyright}>Все права защищены @2021</div>
					</Grid>
					<Grid item xs={12} md={4} className={classes.gridItem}>
						<div className={classes.socialGroup}>
							<div className={classes.socialItem} style={{ marginTop: 3, }}>
								<a href={`${socials?.instagram}`}>
									<img src={instagramm} width={30} />
								</a>
							</div>
							<div className={classes.socialItem}>
								<a href={`${socials?.whatsapp}`}>
									<img src={whatsapp} width={34} />
								</a>
							</div>
							<div className={classes.socialItem} style={{ marginTop: 3, }}>
								<a href={`${socials?.telegram}`}>
									<img src={telegram} width={30} />
								</a>
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default Footer;