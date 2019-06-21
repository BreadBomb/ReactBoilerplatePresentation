// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
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
  babel: require('../assets/babel-logo.png')
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
        <Slide transition={['zoom']} bgColor="primary">
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
                    Reselected
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
        <Slide transition={['fade']}>
          <Image src={images.babel} width={300}/>
          <List>
            <ListItem>Javascript Compiler</ListItem>
            <ListItem>Macht ECMAScript 2015+ abwärtskompatibel</ListItem>
            <ListItem>Polyfills</ListItem>
            <CodePane style={{ marginTop: 30, fontSize: 20 }} lang="javascript" source={require('raw-loader!../assets/babel.example')}/>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem bulletStyle="star">Item 1</ListItem>
            <ListItem bulletStyle="cross">Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500}/>
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
