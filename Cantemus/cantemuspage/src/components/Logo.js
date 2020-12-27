import './Logo.css';
import React from 'react';
import logo from '../images/logo.jpg';

export default class Logo extends React.Component {
  render() {
    return (
      <img src={logo} class="borderedimage" alt="Cantemus" />
    );
  }
}

