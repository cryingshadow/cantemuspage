import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import Impressum from './components/Impressum.js';
import Disclaimer from './components/Disclaimer.js';
import Page404 from './components/Page404.js';

const routes = [
  {name: "Home", exact: true, component: Home, path: "/"},
  {name: "Impressum", exact: true, component: Impressum, path: "/impressum"},
  {name: "Disclaimer", exact: true, component: Disclaimer, path: "/disclaimer"}
];

function App() {
  const routeComponents = routes.map(r => <Route exact={r.exact} component={r.component} path={r.path} />);
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation routes={routes}/>
          <Switch>
            {routeComponents}
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
