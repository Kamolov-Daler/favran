import { Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.svg";
import searchIcon from '../../assets/Group 99.svg';
import filterLogo from '../../assets/Group 98.svg'

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
	burgerMenu: {
		position: 'absolute',
		top: 20,
		left: 20,
	},
	headerContainer: {
		backgroundColor: "#F4F4F4",
		border: "1px solid #707070",
		borderTop: 'none',
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: 'column !important'
	},
	search: {
		width: '70%',
		height: 30,
		display: 'flex',
		paddingBottom: '30px',
		[theme.breakpoints.up("md")]: {
			width: '40%',
		},

		'& button': {
			borderTopLeftRadius: '0px',
			borderBottomLeftRadius: '0px',
			borderTopRightRadius: '8px',
			borderBottomRightRadius: '8px',
			outline: 'none',
			border: '1px solid #707070',
			backgroundColor: '#F3EA64',
			cursor: 'pointer',
		},
		'& button img': {
			height: 18,
		},
		'& input': {
			width: '100%',
			borderTopLeftRadius: '8px',
			borderBottomLeftRadius: '8px',
			borderTopRightRadius: '0px',
			borderBottomRightRadius: '0px',
			border: '1px solid #707070',
			outline: 'none',
			color: '#707070',
			paddingLeft: '5px'
		},
	},
	filterButton: {
		borderRadius: '8px !important',
		'& img': {
			width: 15,
		},
		marginLeft: '7px',
	}
}));


const Header = () => {
	const classes = useStyles();
	const [state, setState] = useState({
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

		setState({ ...state, [anchor]: open });
	};

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
				<NavLink to="/" exact>
					<ListItem button>
						<ListItemIcon>{/* <img src={home} width={25} /> */}</ListItemIcon>
						<ListItemText>test</ListItemText>
					</ListItem>
				</NavLink>
				<Divider />
				<NavLink to="/test" exact>
					<ListItem button>
						<ListItemIcon>{/* <img src={player} width={25} /> */}</ListItemIcon>
						<ListItemText>test</ListItemText>
					</ListItem>
				</NavLink>
				<Divider />
				<NavLink to="/test" exact>
					<ListItem button>
						<ListItemIcon>{/* <img src={club} width={25} /> */}</ListItemIcon>
						<ListItemText>test</ListItemText>
					</ListItem>
				</NavLink>
				<Divider />
				<NavLink to="/test" exact>
					<ListItem button>
						<ListItemIcon>{/* <img src={cup} width={25} /> */}</ListItemIcon>
						<ListItemText>test</ListItemText>
					</ListItem>
				</NavLink>
				<Divider />
				<NavLink to="/test" exact>
					<ListItem button>
						<ListItemIcon>{/* <img src={stadium} width={25} /> */}</ListItemIcon>
						<ListItemText>test</ListItemText>
					</ListItem>
				</NavLink>
				<Divider />
				<NavLink to="/test" exact>
					<ListItem button>
						<ListItemIcon>{/* <img src={school} width={25} /> */}</ListItemIcon>
						<ListItemText>test</ListItemText>
					</ListItem>
				</NavLink>
				<Divider />
				<NavLink to="/test" exact>
					<ListItem button>
						<ListItemIcon>{/* <img src={store} width={25} /> */}</ListItemIcon>
						<ListItemText>Test</ListItemText>
					</ListItem>
				</NavLink>
				<Divider />
			</List>
		</div>
	);

	return (
		<Grid container className={classes.headerContainer}>
			<div className={classes.burgerMenu}>
				<IconButton onClick={toggleDrawer("left", true)} >
					<MenuIcon color="primary" />
				</IconButton>
			</div>
			<div className={classes.logo} onClick={() => history.push('/')}>
				<img src={logo} alt={`logo`} width={80} height={80} />
			</div>
			<div className={classes.search}>
				<input />
				<button className={classes.searchButton} onClick={() => console.log(1)}>
					<img src={searchIcon} alt={'searchLogo'} />
				</button>
				<button className={classes.filterButton}>
					<img src={filterLogo} alt={'searchLogo'} />
				</button>
			</div>
			<Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
				{list("left")}
			</Drawer>
		</Grid>
	);
};

export default Header;
