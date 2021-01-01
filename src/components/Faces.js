import './Faces.css';
import React from 'react';
import PropTypes from 'prop-types';
import heinz from '../images/heinz.jpg';
import thomas from '../images/thomas.jpg';
import gabi from '../images/gabi.jpg';
import judith from '../images/judith.jpg';

export default class Faces extends React.Component {
  render() {
    const left = this.props.left;
    const picture1 = left ? heinz : judith;
    const name1 = left ? "Heinz" : "Judith";
    const picture2 = left ? thomas : gabi;
    const name2 = left ? "Thomas" : "Gabi";
    const className = left ? "FacesLeft" : "FacesRight";
    return (
      <div className={className}>
        <div>
          <img src={picture1} alt={name1} title={name1} />
        </div>
        <div>
          <img src={picture2} alt={name2} title={name2} />
        </div>
      </div>
    );
  }
}

Faces.propTypes = {
  left: PropTypes.bool.isRequired
};
