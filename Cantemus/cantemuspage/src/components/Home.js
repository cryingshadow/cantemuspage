import './Home.css';
import React from 'react';
import Page from './Page.js';
import News from './News.js';
import Logo from './Logo.js';

export default class Home extends React.Component {
  render() {
    const links = [
      {url: "http://www.cvnrw.de", name: "www.cvnrw.de", description: "ChorVerband NRW"},
      {url: "http://www.gdg-hellenthal-schleiden.de", name: "www.gdg-hellenthal-schleiden.de", description: "Gemeinde der Gemeinden Hellenthal-Schleiden"},
      {url: "http://www.schleiden.de", name: "www.schleiden.de", description: "Stadt Schleiden"}
    ];
    const linkItems = links.map(link => <li><a href={link.url} target="_blank" rel="noreferrer">{link.name}</a><span>{link.description}</span></li>);
    return (
      <Page className="Home">
        <h1 align="center">Herzlich Willkommen bei</h1>
        <p align="center">
          <Logo />
        </p>
        <p align="center" id="afterlogo">
          Über die Menüsteuerung im oberen Teil diser Seite können Sie die verschiedenen Informationen unserer Webseite abrufen.
        </p>
        <p align="center">
          Hinter der Rubrik <a href="/quartett">Quartett</a> verbirgt sich eine kleine Beschreibung von uns und unserem Gesangsquartett. Gleichermaßen finden Sie eine Beschreibung unseres erweiterten Ensembles Cantemus and <a href="/friends">Friends</a>.
        </p>
        <p align="center">
          Unter der Rubrik <a href="/repertoire">Repertoire</a> finden Sie eine kurze Zusammenfassung unseres musikalischen Angebotes sowie einige Hörbeispiele.
        </p>
        <p align="center">
          Im <a href="/impressum">Impressum</a> finden Sie unsere Kontaktdaten und einige technische Angaben über unsere Webseite, während Sie im <a href="/disclaimer">Disclaimer</a> rechtliche Hinweise insbesondere zu unserem Umgang mit persönlichen Daten und Links finden.
        </p>
        <p align="center">
          Sie befinden sich hier auf der Startseite, auf der Sie aktuelle Informationen und Links zu anderen mit uns in Verbindung stehenden Seiten finden.
        </p>
        <News />
        <h2>Links</h2>
        <ul className="linklist">
          {linkItems}
        </ul>
        Beachten Sie dazu bitte unseren <a href="/disclaimer">Disclaimer (Haftungsausschluss)</a>.
      </Page>
    );
  }
}
