import './BorderedPicture.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class BorderedPicture extends React.Component {
  render() {
    const pic = this.props.picture;
    const altText = this.props.altText;
    return (
      <img src={pic} className="borderedimage responsivePicture" alt={altText} />
    );
  }
}

BorderedPicture.propTypes = {
  picture: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
};
