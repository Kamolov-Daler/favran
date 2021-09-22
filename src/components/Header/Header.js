import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
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
    <>
      <IconButton>
        <MenuIcon onClick={toggleDrawer("left", true)} />
      </IconButton>
      <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
        {list("left")}
      </Drawer>
    </>
  );
};

export default Header;
