import React from 'react';
import BorderedPicture from './BorderedPicture.js';
import logo from '../images/logo.jpg';

export default class Logo extends React.Component {
  render() {
    return (
      <BorderedPicture picture={logo} altText="Cantemus" />
    );
  }
}

