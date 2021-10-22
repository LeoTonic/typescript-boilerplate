import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography } from '@mui/material';
import Link from './common/link';
import Box from '@common/box';

const theme = createTheme({
  typography: {
    fontFamily: 'Source Sans Pro',
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

/**
 * React application
 *
 * @returns {JSX.Element}
 */
const App = (): JSX.Element => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <header>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link />
          <Box title="Другой бокс" />
          <div>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </div>
        </header>
        <Typography>
          Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum
          является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий
          некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя
          Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без
          заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации
          в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х
          годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в
          шаблонах которых используется Lorem Ipsum.
        </Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industrys standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
      </Container>
    </ThemeProvider>
  </React.Fragment>
);

export default App;
