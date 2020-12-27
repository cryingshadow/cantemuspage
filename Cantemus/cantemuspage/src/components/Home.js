import '../images/images.css';
import React from 'react';
import logo from '../images/logo.jpg';

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1 align="center">Herzlich Willkommen bei</h1>
        <p align="center">
          <img src={logo} class="borderedimage" alt="Cantemus" />
        </p>
        <br /><br /><br />
        <p align="center">
          Über die Navigationsleiste im oberen Teil der Homepage können Sie die verschiedenen Informationen unserer Homepage abrufen.
          <br /><br />
          Hinter der Rubrik <a href="quart.htm" target="main">Quartett</a> verbirgt sich eine kleine Beschreibung von uns und unserem Gesangsquartett.<br />
          Unter der Rubrik <a href="prog.htm" target="main">Repertoire</a> finden Sie eine kurze Zusammenfassung unseres musikalischen Angebotes, sowie einige Hörbeispiele.<br />
        </p>
      </div>
    );
  }
}
