import { Image } from '@mantine/core';
import '../style/Modal.css';
import React from 'react';
import fire from '../assets/HWP_Fix_3_Small_CF_Idle_166ms_Sc200.gif';
import cat from '../assets/HWP_Bush_Eye_Sc200.gif';
import gifBlue from '../assets/HWP_Blu_Idle_Sc200.gif';
import turnBlue from '../assets/HWP_Blu_Turn_Sc200.png';
import gifBrown from '../assets/HWP_Brn_Idle_Sc200.gif';
import turnBrown from '../assets/HWP_Brn_Turn_Sc200.png';
import chestOpen from '../assets/HWP_Chest_Opening_Sc200.gif';
import chestClosed from '../assets/HWP_Chest_Eye_Sc200.gif';
import GreenGuy from '../components/GreenGuy';

export default function Modal() {

  const [blue, setBlue] = React.useState(false)
  const [brown, setBrown] = React.useState(false)
  const [chest, setChest] = React.useState(false)
  

  return (
    <>
      <Image
        className="bonfire"
        src={fire}
        fit="contain"
        h={225}
        w={1000}
      ></Image>
      <GreenGuy/>
      <Image
        className="cat"
        src={cat}
        radius={"sm"}
        fit="fill"
        h={50}
        w={70}
      ></Image>
      <Image
        className="blueGuy"
        onClick={() => setBlue((prevMode) => !prevMode)}
        src={blue ? turnBlue : gifBlue}
        radius={"sm"}
        fit="fill"
        h={200}
        w={220}
      />
      <Image
        className="brownGuy"
        onClick={() => setBrown((prevMode) => !prevMode)}
        src={brown ? turnBrown : gifBrown}
        radius={"sm"}
        fit="fill"
        h={200}
        w={220}
      />
      <Image
        className="chest"
        onClick={() => setChest((prevMode) => !prevMode)}
        src={chest ? chestOpen : chestClosed}
        radius={"sm"}
        fit="fill"
        h={100}
        w={180}
      />
      <Image/>
    </>
  );
}
