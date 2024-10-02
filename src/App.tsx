import '@mantine/core/styles.css';

import Start from './components/Start';
import './style/jacquard24.css';

import { createTheme, MantineProvider } from '@mantine/core';
import './App.css'

const theme = createTheme({
  fontFamily: 'Jacquard 24',
  headings: {
    // Use default theme if you want to provide default Mantine fonts as a fallback
    fontFamily: `Jacquard 24`,
  },
});



export default function App() {
  return (
      <MantineProvider theme={theme}>
        <Start />
      </MantineProvider>
  );
}