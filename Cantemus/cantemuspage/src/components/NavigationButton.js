import './NavigationButton.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class NavigationButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.action()}>
        {this.props.name}
      </button>
    );
  }
}

NavigationButton.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};
