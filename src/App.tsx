import '@mantine/core/styles.css';

import Start from './components/Start';

import { createTheme, MantineProvider, rem } from '@mantine/core';
import "./Alkhemikal/Alkhemikal.css";
import "./Jacquard24/Jacquard24-Regular.css";

const theme = createTheme({
  fontFamily: "Jacquard24-Regular",
  headings: {
    // Use default theme if you want to provide default Mantine fonts as a fallback
    fontFamily: "Jacquard24-Regular",

    sizes: {
      h1: {
        fontSize: rem(110),
      },
      h2: {
        fontSize: rem(60),
      },
    },
  },
  
});



export default function App() {
  return (
      <MantineProvider theme={theme}>
        <Start />
      </MantineProvider>
  );
}