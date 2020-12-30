import './App.css';
import React from 'react';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import Quartett from './components/Quartett.js';
import Friends from './components/Friends.js';
//import More from './components/More.js';
import Repertoire from './components/Repertoire.js';
import Impressum from './components/Impressum.js';
import Disclaimer from './components/Disclaimer.js';
//import Page404 from './components/Page404.js';

const routes = [
  {name: "Quartett", exact: true, component: Quartett, path: "/quartett"},
  {name: "Friends", exact: true, component: Friends, path: "/friends"},
  //{name: "More", exact: true, component: More, path: "/more"},
  {name: "Repertoire", exact: true, component: Repertoire, path: "/repertoire"},
  {name: "Impressum", exact: true, component: Impressum, path: "/impressum"},
  {name: "Disclaimer", exact: true, component: Disclaimer, path: "/disclaimer"}
];

function navigate(self, selection) {
  self.setState({mainPage: selection});
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mainPage: "Home"};
  }
  
  render() {
    const selectedPage = this.state.mainPage;
    const filteredRoutes = routes.filter(route => route.name === selectedPage);
    const MainComponent = filteredRoutes.length > 0 ? filteredRoutes[0].component : Home;
    return (
      <div className="App">
        <Navigation routes={routes} navigate={(selection) => navigate(this, selection)}/>
        <MainComponent />
      </div>
    );
  }
}
