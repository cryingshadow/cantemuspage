import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import Impressum from './components/Impressum.js';
import Page404 from './components/Page404.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact={true} component={Home} path="/" />
            <Route component={Impressum} path="/impressum" />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
