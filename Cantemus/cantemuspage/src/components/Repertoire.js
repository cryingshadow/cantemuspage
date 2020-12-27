import React from 'react';
import {Link} from 'react-router-dom';

export default class Repertoire extends React.Component {
  render() {
    return (
      <div className="Repertoire">
        <h1>Repertoire</h1>
        <br /><br />
        Unser Repertoire reicht von der Renaissance bis in die Moderne. Genauso umfasst es auch Stücke in verschiedenen Sprachen.
        <br />
        Wir singen unter anderem:
        <br />
        <ul>
          <li>englische und italienische Madrigale (Dowland u.a.),</li>
          <li>Literatur aus Barock, Klassik und Romantik,</li>
          <li>Chansons der französischen Romantik,</li>
          <li>Volkslieder,</li>
          <li>meditative Gesänge aus Taizé,</li>
          <li>Pop-Songs (Beatles u.a.),</li>
          <li>Spirituals und Gospels,</li>
          <li>eigene Arrangements aus verschiedensten Stilepochen&nbsp;&nbsp;&nbsp;u.v.m.</li>
        </ul>
        <br />
        <h3>Hörbeispiele:</h3>
        <ul>
          <li><Link to="audite.mp3" target="_blank" download>Audite Silete</Link></li>
          <li><Link to="alleraug.mp3" target="_blank" download>Aller Augen</Link></li>
          <li><Link to="wirfdein.mp3" target="_blank" download>Wirf dein Anliegen</Link></li>
          <li><Link to="exultate.mp3" target="_blank" download>Live: Exultate justi</Link></li>
          <li><Link to="cantate.mp3" target="_blank" download>Live: Cantate Domino</Link></li>
        </ul>
      </div>
    );
  }
}
