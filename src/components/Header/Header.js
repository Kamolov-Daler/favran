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

const useStyles = makeStyles({
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
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column !important'
  },
});

const Header = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const history = useHistory()
  console.log(history)
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
        <button>
          <img src={searchIcon} alt={'searchLogo'}/>
        </button>
      </div>
      <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
        {list("left")}
      </Drawer>
    </Grid>
  );
};

export default Header;
