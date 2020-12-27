import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import Quartett from './components/Quartett.js';
import Friends from './components/Friends.js';
import More from './components/More.js';
import Repertoire from './components/Repertoire.js';
import Impressum from './components/Impressum.js';
import Disclaimer from './components/Disclaimer.js';
import Page404 from './components/Page404.js';

const routes = [
  {name: "Quartett", exact: true, component: Quartett, path: "/quartett"},
  {name: "Friends", exact: true, component: Friends, path: "/friends"},
  {name: "More", exact: true, component: More, path: "/more"},
  {name: "Repertoire", exact: true, component: Repertoire, path: "/repertoire"},
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
            <Route exact component={Home} path="/" />
            {routeComponents}
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
