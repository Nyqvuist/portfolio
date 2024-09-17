import { Image } from '@mantine/core';
import cat from '../assets/HWP_Bush_Eye_Sc200.gif';
import "../style/cat.css";

export default function Cat() {
  return (
    <Image
        className="cat"
        src={cat}
        radius={"sm"}
        fit="fill"
        h={50}
        w={70}
      ></Image>
  )
}
