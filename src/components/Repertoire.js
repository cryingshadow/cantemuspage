import React from 'react';
import Page from './Page.js';

export default class Repertoire extends React.Component {
  render() {
    const samples = [
      {fileName: "audite.mp3", displayName: "Audite Silete"},
      {fileName: "alleraug.mp3", displayName: "Aller Augen"},
      {fileName: "wirfdein.mp3", displayName: "Wirf dein Anliegen"},
      {fileName: "exultate.mp3", displayName: "Live: Exultate justi"},
      {fileName: "cantate.mp3", displayName: "Live: Cantate Domino"}
    ];
    const downloads = samples.map(sample => <li><a href={sample.fileName} target="_blank" rel="noreferrer" download>{sample.displayName}</a></li>);
    return (
      <Page className="Repertoire">
        <h1>Repertoire</h1>
        <p>
          Unser Repertoire reicht von der Renaissance bis in die Gegenwart. Genauso umfasst es auch Stücke in verschiedenen Sprachen und Stilrichtungen.
        </p>
        <p>
          Wir singen unter anderem:
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
        </p>
        <h3>Hörbeispiele</h3>
        <ul>
          {downloads}
        </ul>
        <h3>Videos</h3>
        <a href="https://www.youtube.com/channel/UCiFWsz4hmZeP_j3PN4FZuSw" target="_blank" rel="noreferrer">Link zu unserem YouTube Kanal</a>
      </Page>
    );
  }
}
