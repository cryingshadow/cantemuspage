import React from 'react';
import './Navigation.css';
import NavigationButton from './NavigationButton.js';
import PropTypes from 'prop-types';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showMenu: false};
  }

  navigate(selection) {
    this.props.navigate(selection);
    this.setState({showMenu: false});
  }

  render() {
    const showMenu = this.state.showMenu;
    const menuClass = showMenu ? "nav-menu menu-on" : "nav-menu menu-off";
    const navigationComponents = this.props.routes.map(route => <NavigationButton name={route.name} action={() => this.navigate(route.name)} />);
    return (
      <div className="Navigation">
        <NavigationButton name="Cantemus" action={() => this.navigate("Home")} />
        <div className={menuClass}>
          {navigationComponents}
        </div>
        <button className="NavigationToggle" onClick={() => this.setState({showMenu: true})}>
        </button>
      </div>
    );
  }
}

Navigation.propTypes = {
  routes: PropTypes.array.isRequired,
  navigate: PropTypes.func.isRequired
};
