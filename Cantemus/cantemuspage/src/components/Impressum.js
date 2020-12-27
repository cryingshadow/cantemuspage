import '../images/images.css';
import React from 'react';
import logo from '../images/logo.jpg';

export default class Impressum extends React.Component {
  render() {
    return (
      <div className="Impressum">
        <h1>Impressum</h1>
        <p>
          <b>Diese Seite wurde erstellt am: </b>27. Dezember 2020<br />
          <b>Letzte Änderung: </b>TODO<br />
          <b>Programmierung und Design: </b>Thomas Ströder<br />
        </p>
        <p>
          <b>Anschrift: </b><br />Familie Ströder<br />Amselweg 13<br />53937 Schleiden<br />Tel.: 02445/7998
        </p>
        <br />
        <p align="center">
          Die Urheberrechte für diese Seite hält Thomas Ströder. Das Kopieren von Inhalten dieser Seite ist nur in ihrem ursprünglichen Zustand gestattet. Jegliche Veränderungen von Inhalten dieser Seite und deren Weitergabe sind untersagt. Name und Logo des Gesangsquartett Cantemus sind Eigentum der Familie Ströder.
          <br /><br /><br /><br />
          <img src={logo} class="borderedimage" alt="" />
        </p>
        <br /><br />
        Bei technischen Problemen oder Störungen senden Sie bitte eine Mail an den <a href='mailto:cryingshadow@web.de'>Administrator</a>.
      </div>
    );
  }
}
