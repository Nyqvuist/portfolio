import { Image } from '@mantine/core';
import fire from '../assets/HWP_Fix_3_Small_CF_Idle_166ms_Sc200.gif';
import "../style/bonfire.css";

export default function Bonfire() {
  return (
    <Image
        className="bonfire"
        src={fire}
        fit="contain"
        h={225}
        w={1000}
      ></Image>
  )
}
