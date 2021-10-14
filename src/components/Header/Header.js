import { Button, Divider, Drawer, Grid, List, ListItem, ListItemText, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.svg";
import { shallowEqual, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { Close, Search } from '@mui/icons-material';
import '../../App.css'

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
	burgerMenu: {
		position: 'absolute',
		top: 10,
		left: 10,
	},
	headerContainer: {
		backgroundColor: "#F4F4F4",
		borderTop: 'none',
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: 'column !important',
		minHeight: 60,
	},
	search: {
		paddingTop: '100px',
		width: '90%',
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.up("md")]: {
			width: '40%',
		},
	},
	logo: {
		paddingTop: 5,
		cursor: 'pointer',
		position: 'absolute',
		top: '-10px',
		backgroundColor: '#F4F4F4',
		borderRadius: '50px',
		'& img': {
			marginTop: 10,
			width: 100,
			height: 80,
		}

	},
	navItem: {
		'& a': {
			textDecoration: 'none',
			color: '#000',
		},
	},
	buttonGroup: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'column',
		width: '80%',
		'& div': {
			minWidth: '100%',
			marginTop: 10,
			[theme.breakpoints.up("md")]: {
				maxWidth: '90%',
			},
		},
		'& button': {
			padding: '5px 0px',
			marginLeft: '0px',
			marginTop: '10px',
			width: '100%',
			[theme.breakpoints.up("md")]: {
				padding: '15px 0',
				flexDirection: 'row',
				marginTop: '30px',
				marginLeft: '10px',
			},
		},
		[theme.breakpoints.up("md")]: {
			flexDirection: 'row',
		},
	},
	searchIcon: {
		position: 'absolute',
		top: 10,
		right: 10,
	}
}));


const Header = () => {
	const classes = useStyles();
	const { categories } = useSelector((state) => state.mainReducer, shallowEqual);
	const [filterActive, setFilterActive] = useState(false);
	const [name, setName] = useState('');
	const [discountAmount, setDiscountAmount] = useState('')
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [val, setVal] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const history = useHistory()
	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}

		setVal({ ...val, [anchor]: open });
	};

	const closeFilterBlock = () => {
		if (filterActive) {
			setFilterActive(false);
		}
	}

	const searchGoods = () => {
		let str = "?";
		if (name.trim()) {
			str += 'query=' + name
		}
		if (discountAmount > 0) {
			str += '&discount_amount=' + discountAmount
		}
		if (minPrice > 0) {
			str += '&min_price=' + minPrice
		}
		if (maxPrice > 0) {
			str += '&max_price=' + maxPrice
		}

		history.push(`/search${str}`);
	}

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<div className={classes.navItem} onClick={closeFilterBlock}>
					<NavLink to={`/`} exact>
						<ListItem button>
							<ListItemText>Главная</ListItemText>
						</ListItem>
					</NavLink>
					<Divider />
				</div>
				{categories.map((item, idx) =>
					<div key={idx} className={classes.navItem} onClick={closeFilterBlock}>
						<NavLink to={`/${item.name}/${item.id}`} exact>
							<ListItem button>
								<ListItemText>{item.name}</ListItemText>
							</ListItem>
						</NavLink>
						<Divider />
					</div>
				)}
			</List>
		</div>
	);



	useEffect(() => {
		if (history.location.pathname === "/search") return
		setName("");
		setDiscountAmount("");
		setMinPrice("");
		setMaxPrice("");
	}, [history.location.pathname])

	return (
		<Grid container className={`${classes.headerContainer} header-container`}>
			<div className={classes.burgerMenu}>
				<IconButton disabled={categories.length > 1 ? false : true} onClick={toggleDrawer("left", true)} >
					<MenuIcon color="primary" />
				</IconButton>
			</div>
			<div className={`${classes.logo} ${filterActive ? '' : 'header-logo'}`} onClick={() => { history.push('/'); setName(""); closeFilterBlock(); setDiscountAmount(""); setMinPrice(""); setMaxPrice(""); }}>
				<img src={logo} alt={`logo`} width={80} height={80} />
			</div>
			<div className={classes.searchIcon}>
				{filterActive ?
					<IconButton onClick={() => setFilterActive(false)}>
						<Close color="primary" />
					</IconButton>
					:
					<IconButton onClick={() => setFilterActive(true)}>
						<Search color="primary" />
					</IconButton>
				}
			</div>
			{filterActive ?
				<div className={classes.search}>
					<Box mb={3} className={classes.buttonGroup}>
						<Grid>
							<TextField fullWidth id="standard-basic" value={name} onChange={(e) => setName(e.target.value)} label="Название товара" variant="filled" />
							<TextField fullWidth id="standard-basic" value={discountAmount} onChange={e => setDiscountAmount(e.target.value)} type="number" label="Процент скидки" variant="filled" />
							<TextField id="standard-basic" type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} label="Цена от" variant="filled" />
							<TextField id="standard-basic" type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} label="Цена до" variant="filled" />
						</Grid>
						<Button variant="contained" disabled={name.trim() || discountAmount > 0 || minPrice > 0 || maxPrice > 0 ? false : true} onClick={searchGoods}>
							<Search />
						</Button>
					</Box>
				</div>
				: null
			}
			<Drawer anchor={"left"} open={val["left"]} onClose={toggleDrawer("left", false)}>
				{list("left")}
			</Drawer>
		</Grid>
	);
};

export default Header;
