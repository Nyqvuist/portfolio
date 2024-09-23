import '@mantine/core/styles.css';

import Start from './components/Start';

import { MantineProvider } from '@mantine/core';
import './App.css'



export default function App() {
  return (
    <>
      <MantineProvider>
        <Start />
      </MantineProvider>
    </>
  );
}