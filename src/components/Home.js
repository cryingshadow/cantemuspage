import './Home.css';
import React from 'react';
import Page from './Page.js';
import Logo from './Logo.js';
import TextButton from './TextButton.js';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
  render() {
    const navigate = this.props.navigate;
    const links = [
      {url: "https://www.youtube.com/channel/UCiFWsz4hmZeP_j3PN4FZuSw", name: "https://www.youtube.com/channel/UCiFWsz4hmZeP_j3PN4FZuSw", description: "Unser YouTube-Kanal"},
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
          Hinter der Rubrik <TextButton name="Quartett" action={() => navigate("Quartett")} /> verbirgt sich eine kleine Beschreibung von uns und unserem Gesangsquartett. Gleichermaßen finden Sie eine Beschreibung unseres erweiterten Ensembles Cantemus and <TextButton name="Friends" action={() => navigate("Friends")} />.
        </p>
        <p align="center">
          Unter der Rubrik <TextButton name="Repertoire" action={() => navigate("Repertoire")} /> finden Sie eine kurze Zusammenfassung unseres musikalischen Angebotes sowie einige Hörbeispiele.
        </p>
        <p align="center">
          Im <TextButton name="Impressum" action={() => navigate("Impressum")} /> finden Sie unsere Kontaktdaten und einige technische Angaben über unsere Webseite, während Sie im <TextButton name="Disclaimer" action={() => navigate("Disclaimer")} /> rechtliche Hinweise insbesondere zu unserem Umgang mit persönlichen Daten und Links finden.
        </p>
        <p align="center">
          Sie befinden sich hier auf der Startseite, auf der Sie aktuelle Informationen und Links zu anderen mit uns in Verbindung stehenden Seiten finden.
        </p>
        <h2>Links</h2>
        <ul className="linklist">
          {linkItems}
        </ul>
        Beachten Sie dazu bitte unseren <TextButton name="Disclaimer (Haftungsausschluss)" action={() => navigate("Disclaimer")} />.
      </Page>
    );
  }
}

Home.propTypes = {
  navigate: PropTypes.func.isRequired
};
