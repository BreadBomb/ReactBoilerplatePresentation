// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  CodePane,
  Code,
  Table,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableItem,
  TableBody
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  boilerplate: require('../assets/boilerplate.png'),
  immer: require('../assets/immer-logo.png'),
  helmet: require('../assets/helmet-logo.png'),
  redux: require('../assets/redux-logo.png'),
  router: require('../assets/router-logo.png'),
  styled: require('../assets/styled-components-logo.png'),
  saga: require('../assets/saga-logo.png'),
  babel: require('../assets/babel-logo.png'),
  redux_chart: require('../assets/redux_chart.png'),
  immer_explain: require('../assets/immer_explain.png'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#B1624D',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Image src={images.boilerplate} width={200}/>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Boilerplate
          </Heading>
        </Slide>
        <Slide>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem/>
                <TableHeaderItem/>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>
                  <Image src={images.immer} width={200}/>
                </TableItem>
                <TableItem>
                  <Heading size={6} caps textColor="secondary">
                    React Intl
                  </Heading>
                </TableItem>
                <TableItem>
                  <Heading size={6} caps textColor="secondary">
                    Prop Types
                  </Heading>
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <Image src={images.helmet} width={200}/>
                </TableItem>
                <TableItem>
                  <Image src={images.redux} width={200}/>
                </TableItem>
                <TableItem>
                  <Image src={images.router} width={150}/>
                </TableItem>
                <TableItem>
                  <Image src={images.babel} width={200}/>
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <Heading size={6} caps textColor="secondary">
                    Reselect
                  </Heading>
                </TableItem>
                <TableItem>
                  <Image src={images.styled} width={200}/>
                </TableItem>
                <TableItem>
                  <Image src={images.saga} width={200}/>
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide>
          <Image src={images.babel} width={300}/>
          <List>
            <ListItem>Javascript Compiler</ListItem>
            <ListItem>Macht ECMAScript 2015+ abwärtskompatibel</ListItem>
            <ListItem>Polyfills</ListItem>
            <CodePane style={{
              marginTop: 30,
              fontSize: 20
            }} lang="javascript" source={require('raw-loader!../assets/babel.example')}
            />
          </List>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="secondary">
            Prop Types
          </Heading>
          <List>
            <ListItem>Laufzeitüberprüfung von props und anderen Objekten</ListItem>
            <ListItem>Validierung von Typen</ListItem>
            <ListItem>Dokumentation von Code</ListItem>
          </List>
          <CodePane style={{
            marginTop: 30,
            fontSize: 20
          }} lang="javascript" source={require('raw-loader!../assets/propTypes.example')}
          />
        </Slide>
        <Slide>
          <Image src={images.helmet} width={250}/>
          <List>
            <ListItem>Editieren des Heads</ListItem>
            <ListItem>Wiederverwendbar</ListItem>
            <CodePane style={{
              marginTop: 30,
              fontSize: 20
            }} lang="javascript" source={require('raw-loader!../assets/helmet.example')}
            />
          </List>
        </Slide>
        <Slide>
          <Image src={images.styled} width={150}/>
          <List>
            <ListItem>Primitive Komponenten</ListItem>
            <ListItem>Nur Visuell</ListItem>
          </List>
        </Slide>
        <Slide>
          <CodePane style={{
            marginTop: 30,
            fontSize: 20
          }} lang="javascript" source={require('raw-loader!../assets/styled_components.example')}
          />
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="secondary">
            React Intl
          </Heading>
          <List>
            <ListItem>React Bindings für FormatJS</ListItem>
            <ListItem>Via Komponenten</ListItem>
            <ListItem>Sprachspeziefische Übersetzung und Formatierung</ListItem>
          </List>
          <CodePane style={{
            marginTop: 30,
            fontSize: 20
          }} lang="javascript" source={require('raw-loader!../assets/reactIntl.example')}
          />
        </Slide>
        <Slide>
          <Image src={images.router} width={150}/>
          <List>
            <ListItem>Der Standard im React Routing</ListItem>
            <ListItem>Empfohlen von React / Facebook</ListItem>
            <ListItem>Großen Funktionsumfang</ListItem>
            <ListItem>Kompatibel mit Redux</ListItem>
          </List>
        </Slide>
        <Slide>
          <CodePane style={{
            marginTop: 30,
            fontSize: 20
          }} lang="javascript" source={require('raw-loader!../assets/router.example')}
          />
        </Slide>
        <Slide>
          <Image src={images.redux} width={200}/>
          <List>
            <ListItem>Zentrales State-Management</ListItem>
            <ListItem>Empfohlen von React / Facebook</ListItem>
            <ListItem>Undo / Redo</ListItem>
            <ListItem>Debuggen mit dem Redux Debugger</ListItem>
          </List>
        </Slide>
        <Slide>
          <Image src={images.redux_chart}/>
        </Slide>
        <Slide>
          <CodePane
            lang="javascript"
            style={{
              marginTop: -60,
              fontSize: 20
            }}
            source={require('raw-loader!../assets/redux_component.example')}
          />
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="secondary">
          Redux Action
          </Heading>
          <CodePane
            lang="javascript"
            style={{
              fontSize: 20
            }}
            source={require('raw-loader!../assets/redux_action.example')}
          />
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="secondary">
            Redux Reducer
          </Heading>
          <CodePane
            lang="javascript"
            style={{
              fontSize: 20
            }}
            source={require('raw-loader!../assets/redux_reducer.example')}
          />
        </Slide>
        <Slide>
          <Image src={images.immer} width={250}/>
          <List>
            <ListItem>Kleines Paket zum einfachen verändern des States</ListItem>
          </List>
          <Image src={images.immer_explain}/>
        </Slide>
        <Slide>
          <Notes>
            <List>
              <ListItem>
                Haupt Redux Regel: Unveränderlichkeit
              </ListItem>
            </List>
          </Notes>
          <Table style={{
            marginLeft: -300
          }}
          >
            <TableBody>
              <TableItem>
                <CodePane
                  lang="javascript"
                  style={{
                    fontSize: 20,
                    width: 800,
                    marginTop: -60
                  }}
                  source={require('raw-loader!../assets/redux_reducer.example')}
                />
              </TableItem>
              <TableItem>
                <CodePane
                  lang="javascript"
                  style={{
                    fontSize: 20,
                    width: 800
                  }}
                  source={require('raw-loader!../assets/redux_reducer_immer.example')}
                />
              </TableItem>
            </TableBody>
          </Table>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="secondary">
            RESELECT
          </Heading>
          <List>
            <ListItem>Memorisierte Selektroren</ListItem>
            <ListItem>Berechnen von abgeleiteten Daten, zur minimierung des gespeicherten States</ListItem>
            <ListItem>Kombinierbar</ListItem>
            <ListItem>Mehrfach verwendbar</ListItem>
          </List>
          <CodePane style={{
            marginTop: 30,
            fontSize: 20
          }} lang="javascript" source={require('raw-loader!../assets/reselect.example')}
          />
        </Slide>
        <Slide>
          <Image src={images.saga} width={200}/>
          <List>
            <ListItem>Side-Effects für Redux</ListItem>
            <ListItem>=> Asynchrone Dinge wie Api Requests</ListItem>
          </List>
        </Slide>
        <Slide>
          <CodePane style={{
            marginTop: -60,
            fontSize: 20
          }} lang="javascript" source={require('raw-loader!../assets/saga.example')}
          />
        </Slide>
      </Deck>
    );
  }
}
