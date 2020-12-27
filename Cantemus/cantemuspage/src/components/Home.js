import React from 'react';
import Logo from './Logo.js';

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1 align="center">Herzlich Willkommen bei</h1>
        <p align="center">
          <Logo />
        </p>
        <br /><br /><br />
        <p align="center">
          Über die Navigationsleiste im oberen Teil der Homepage können Sie die verschiedenen Informationen unserer Homepage abrufen.
          <br /><br />
          Hinter der Rubrik <a href="/quartett">Quartett</a> verbirgt sich eine kleine Beschreibung von uns und unserem Gesangsquartett.
          <br />
          Unter der Rubrik <a href="/repertoire">Repertoire</a> finden Sie eine kurze Zusammenfassung unseres musikalischen Angebotes, sowie einige Hörbeispiele.
        </p>
      </div>
    );
  }
}
