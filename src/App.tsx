// import React from 'react'

// import './App.css'

// function App() {

//   return (
//     <>
//       <p>Hello World</p>
//     </>
//   )
// }

// export default App
import '@mantine/core/styles.css';

import Modal from '../components/Modal';

import { MantineProvider } from '@mantine/core';
import './App.css'



export default function App() {
  return (
    <>
      <MantineProvider>
        <Modal />
      </MantineProvider>
    </>
  );
}