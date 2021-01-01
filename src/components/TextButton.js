import './TextButton.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class TextButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.action} className="TextButton">
        {this.props.name}
      </button>
    );
  }
}

TextButton.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};
