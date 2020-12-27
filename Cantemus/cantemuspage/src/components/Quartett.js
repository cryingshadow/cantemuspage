import React from 'react';
import BorderedPicture from './BorderedPicture.js';
import family1 from '../images/family.jpg';
import family2 from '../images/family2.jpg';

export default class Quartett extends React.Component {
  render() {
    return (
      <div className="Quartett">
        <h1>Wir stellen uns vor</h1>
        <p align="center">
          <img src={family1} alt="Cantemus"/>
          <br /><br />
          Das Gesangsquartett Cantemus wurde im Jahr 2003 gegründet und besteht aus der vierköpfigen Musikerfamilie Ströder:
          <br />
          Judith (Sopran), Gabi (Alt), Thomas (Tenor) und Heinz (Bass).
          <br /><br />
          Schon lange vor Gründung dieses Quartetts haben wir viel gemeinsam in den unterschiedlichsten Stilrichtungen und Gruppierungen musiziert. Besonders hat uns aber der Gesang Freude gemacht und so haben wir begonnen, ein kleines Repertoire für uns vier einzustudieren.
          <br /><br />
          Das Repertoire und die Anzahl der Auftritte wuchsen mit der Zeit, da verschiedene Auftritte vor unterschiedlichem Publikum und zu unterschiedlichen Anlässen jeweils andere Literatur erforderten. So gaben wir unserem bis dahin namenlosen Gesangsquartett im Sommer 2003 einen Namen, der unser Programm klar ausdrückt: Cantemus - lasst uns singen.
          <br /><br />
          Singen ist für uns eine besonders reizvolle Form der Musik, da kein Instrument so facettenreich ist, wie die menschliche Stimme. Der Gesang mit mehreren Stimmen, sowohl a-capella als auch mit instrumentaler Begleitung, ist eine der vielseitigsten musikalischen Ausdrucksformen.
          <br /><br />
          Diese Vielseitigkeit wollen wir auch nutzen, und so besteht unser Repertoire aus Stücken der verschiedensten Zeit- und Stilepochen von alten Madrigalen bis hin zu moderner Pop-Musik. Auch ein paar eigene Bearbeitungen und Kompositionen finden sich in unserem <a href="/repertoire">Repertoire</a>.
          <br /><br />
          Unsere musikalische Tätigkeit erstreckt sich regional auf Schleiden in der Eifel und seine Umgebung. Ob im Schleidener Wintergarten, im Gemünder Kurhaus oder im Kloster "Maria Wald", wir singen gerne an jedem Ort und zu jeder Gelegenheit.
          <br /><br />
          {//Um mit uns Kontakt aufzunehmen, können Sie unser <a href="kontakt.htm" target="main">Kontakt</a>formular benutzen.
          }
          Unsere Anschrift finden Sie im <a href="/impressum">Impressum</a>.
          <br /><br />
          <BorderedPicture picture={family2} altText="Cantemus" />
        </p>
      </div>
    );
  }
}
