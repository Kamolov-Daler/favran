import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import { makeStyles } from "@mui/styles";
import Category from './components/Category/Category';
import { Alert, Backdrop, CircularProgress } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMainInfo, SET_BANNERS, SET_TOP_CATEGORIES_WITH_GOODS } from './store/action/main';
import Search from './components/Search/Search';



const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: '100vh',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	}
}));

function App() {
	const classes = useStyles()
	const { loader, categories } = useSelector((state) => state.mainReducer, shallowEqual)
	const dispatch = useDispatch();
	const theme = createTheme(
		{
			palette: {
				primary: {
					main: "#515151",
					contrastText: "#fff",
				},

				secondary: {
					main: "#F4F4F4",
					contrastText: "#fff",
				},
				error: {
					main: "rgb(235,76,66)",
				},
			},
		},
	);

	useEffect(() => {
		dispatch(getMainInfo())
		return () => {
			dispatch({ type: SET_BANNERS, payload: [] })
			dispatch({ type: SET_TOP_CATEGORIES_WITH_GOODS, payload: [] })
		}
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.container}>
				<Header />
				<Switch>
					<Route path={`/`} exact>
						<Main />
					</Route>
					<Route path={`/:name/:id`} exact>
						<Category />
					</Route>
					<Route path={`/search`} exact>
						<Search />
					</Route>
					<Route path="*">
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 50 }}>
							<Alert severity="warning">Страница не найдено</Alert>
						</div>
					</Route>
				</Switch>
				<Footer />
				<Backdrop
					sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={loader}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			</div>
		</ThemeProvider>
	);
}

export default App;
