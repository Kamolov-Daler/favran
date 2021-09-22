import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={`/`} exact>
          <h1>Main</h1>
        </Route>
        <Route path={`/search`} exact>
          <h1>Search</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
