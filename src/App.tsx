import '@mantine/core/styles.css';

import Start from './components/Start';

import { createTheme, MantineProvider } from '@mantine/core';
import "./Alkhemikal/Alkhemikal.css";

const theme = createTheme({
  fontFamily: "Alkhemikal",
  headings: {
    // Use default theme if you want to provide default Mantine fonts as a fallback
    fontFamily: "Alkhemikal",
  },
});



export default function App() {
  return (
      <MantineProvider theme={theme}>
        <Start />
      </MantineProvider>
  );
}