import React from 'react';
import './Navigation.css';
import NavigationButton from './NavigationButton.js';

export default class Navigation extends React.Component {
  render() {
    const navigate = this.props.navigate;
    const navigationComponents = this.props.routes.map(route => <NavigationButton name={route.name} action={() => navigate(route.name)} />);
    return (
      <div className="Navigation">
        <NavigationButton name="Cantemus" action={() => navigate("Home")} />
        {navigationComponents}
      </div>
    );
  }
}
