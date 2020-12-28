import React from 'react';
import Page from './Page.js';

export default class Friends extends React.Component {
  render() {
    return (
      <Page className="Friends">
        <h1>Cantemus and Friends</h1>
        <p align="center">
          Seit 2014 wird das Gesangsquartett Cantemus um vier Freunde (und in einem Fall sogar einen Ehepartner) der Familie Ströder zu dem Oktett Cantemus and Friends erweitert. Jutta Harzheim (Sopran), Martina Paul (Alt), Werner Harzheim (Tenor) und Thomas Scherer (Bass) ermöglichen gemeinsam mit dem Originalquartett auch die Aufführung von Literatur, die mehr als vier Stimmen erfordert. Jutta, Martina und Werner haben bereits in vielen Chören gemeinsam mit der Familie Ströder musiziert, während Thomas Scherer als Ehemann von Judith ebenfalls ein enges Verhältnis zur Familie Ströder hat und auch in diversen musikalischen Gruppierungen aktiv war.
        </p>
      </Page>
    );
  }
}
