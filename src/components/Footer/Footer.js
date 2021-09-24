import { Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import phone from '../../assets/phone-call.svg';
import instagramm from '../../assets/instagramm.svg';
import facebook from '../../assets/facebook.svg';
import telegram from '../../assets/telegramm.svg';

const useStyles = makeStyles((theme) => ({
	footerContainer: {
		backgroundColor: "#F4F4F4",
		border: "1px solid #707070",
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

	return (
		<div className={classes.footerContainer}>
			<Container>
				<Grid container className={classes.footerContent}>
					<Grid item xs={12} md={4} className={classes.gridItem}>
						<div>Наши контакты:<a href="tel:+992917575250" className={classes.phoneHref}>(+992) 917575250</a></div>
					</Grid>
					<Grid item xs={12} md={4} className={classes.gridItem}>
						<div className={classes.copyright}>Все права защищены @2021</div>
					</Grid>
					<Grid item xs={12} md={4} className={classes.gridItem}>
						<div className={classes.socialGroup}>
							<div className={classes.socialItem}>
								<a href="#">
									<img src={phone} width={30} />
								</a>
							</div>
							<div className={classes.socialItem}>
								<a href="#">
									<img src={instagramm} width={30} />
								</a>
							</div>
							<div className={classes.socialItem}>
								<a href="#">
									<img src={facebook} width={30} />
								</a>
							</div>
							<div className={classes.socialItem}>
								<a href="#">
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