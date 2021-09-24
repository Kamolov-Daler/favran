import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import { makeStyles } from "@mui/styles";


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

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.container}>
				<Header />
				<Switch>
					<Route path={`/`} exact>
						<Main />
					</Route>
					<Route path={`/search`} exact>
						<h1>Search</h1>
					</Route>
				</Switch>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
