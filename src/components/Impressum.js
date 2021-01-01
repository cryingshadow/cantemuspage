import './Impressum.css';
import React from 'react';
import Page from './Page.js';
import Logo from './Logo.js';

export default class Impressum extends React.Component {
  render() {
    return (
      <Page className="Impressum">
        <h1>Impressum</h1>
        <p>
          <table>
            <tr>
              <th>Diese Seite wurde erstellt am:</th>
              <td>06. Februar 2006</td>
            </tr>
            <tr>
              <th>Letzte Änderung:</th>
              <td>30. Dezember 2020</td>
            </tr>
            <tr>
              <th>Programmierung und Design:</th>
              <td>Thomas Ströder</td>
            </tr>
          </table>
        </p>
        <p>
          <table>
            <tr>
              <th>Anschrift:</th>
            </tr>
            <tr>
              <td>Familie Ströder</td>
            </tr>
            <tr>
              <td>Amselweg 13</td>
            </tr>
            <tr>
              <td>53937 Schleiden</td>
            </tr>
            <tr>
              <td>Tel.: 02445/7998</td>
            </tr>
            <tr>
              <td>Email: <a href='mailto:cantemus@email.de'>cantemus@email.de</a></td>
            </tr>
          </table>
        </p>
        <p align="center">
          Die Urheberrechte für diese Seite hält Thomas Ströder. Das Kopieren von Inhalten dieser Seite ist nur in ihrem ursprünglichen Zustand gestattet. Jegliche Veränderungen von Inhalten dieser Seite und deren Weitergabe sind untersagt. Name und Logo des Gesangsquartett Cantemus sind Eigentum der Familie Ströder.
        </p>
        <p align="center" id="logopar">
          <Logo />
        </p>
        <p>
          Bei technischen Problemen oder Störungen senden Sie bitte eine Email an uns: <a href='mailto:cantemus@email.de'>cantemus@email.de</a>.
        </p>
      </Page>
    );
  }
}
