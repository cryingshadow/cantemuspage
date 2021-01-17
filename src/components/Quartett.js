import React from 'react';
import Page from './Page.js';
import BorderedPicture from './BorderedPicture.js';
import family1 from '../images/family.jpg';
import family2 from '../images/family2.jpg';
import TextButton from './TextButton.js';
import PropTypes from 'prop-types';

export default class Quartett extends React.Component {
  render() {
    const navigate = this.props.navigate;
    return (
      <Page className="Quartett">
        <h1>Wir stellen uns vor</h1>
        <p align="center">
          <img src={family1} alt="Cantemus" className="responsivePicture" />
        </p>
        <p align="center">
          Das Gesangsquartett Cantemus wurde im Jahr 2003 gegründet und besteht aus der vierköpfigen Musikerfamilie Judith Scherer (Sopran, geb. Ströder), Gabi Ströder (Alt), Thomas Ströder (Tenor) und Heinz Ströder (Bass).
        </p>
        <p align="center">
          Schon lange vor Gründung dieses Quartetts haben wir viel gemeinsam in den unterschiedlichsten Stilrichtungen und Gruppierungen musiziert. Besonders hat uns aber der Gesang Freude gemacht und so haben wir begonnen, ein kleines Repertoire für uns vier einzustudieren.
        </p>
        <p align="center">
          Das Repertoire und die Anzahl der Auftritte wuchsen mit der Zeit, da verschiedene Auftritte vor unterschiedlichem Publikum und zu unterschiedlichen Anlässen jeweils andere Literatur erforderten. So gaben wir unserem bis dahin namenlosen Gesangsquartett im Sommer 2003 einen Namen, der unser Programm klar ausdrückt: Cantemus - lasst uns singen.
        </p>
        <p align="center">
          Singen ist für uns eine besonders reizvolle Form der Musik, da kein Instrument so facettenreich ist, wie die menschliche Stimme. Der Gesang mit mehreren Stimmen, sowohl a-capella als auch mit instrumentaler Begleitung, ist eine der vielseitigsten musikalischen Ausdrucksformen.
        </p>
        <p align="center">
          Diese Vielseitigkeit wollen wir auch nutzen, und so besteht unser Repertoire aus Stücken der verschiedensten Zeit- und Stilepochen von alten Madrigalen bis hin zu moderner Pop-Musik. Auch ein paar eigene Bearbeitungen und Kompositionen finden sich in unserem <TextButton name="Repertoire" action={() => navigate("Repertoire")} />.
        </p>
        <p align="center">
          Unsere musikalische Tätigkeit erstreckt sich regional auf Schleiden in der Eifel und seine Umgebung. Ob im Schleidener Wintergarten, im Gemünder Kurhaus oder im Kloster "Maria Wald", wir singen gerne an jedem Ort und zu jeder Gelegenheit.
        </p>
        <p align="center">
          Unsere Anschrift finden Sie im <TextButton name="Impressum" action={() => navigate("Impressum")} />.
        </p>
        <p align="center">
          <BorderedPicture picture={family2} altText="Cantemus" />
        </p>
      </Page>
    );
  }
}

Quartett.propTypes = {
  navigate: PropTypes.func.isRequired
};
