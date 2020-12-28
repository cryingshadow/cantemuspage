import './Page.css';
import React from 'react';
import Faces from './Faces.js';
import PropTypes from 'prop-types';

export default class Page extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Faces left={true} />
        <div className="main">
          {this.props.children}
        </div>
        <Faces left={false} />
      </div>
    );
  }
}

Page.propTypes = {
  className: PropTypes.string.isRequired
};
