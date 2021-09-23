import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {
  
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
      <Header />
      <Switch>
        <Route path={`/`} exact>
          <h1>Main</h1>
        </Route>
        <Route path={`/search`} exact>
          <h1>Search</h1>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
