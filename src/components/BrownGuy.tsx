import { Image } from '@mantine/core';
import gifBrown from '../assets/HWP_Brn_Idle_Sc200.gif';
import turnBrown from '../assets/HWP_Brn_Turn_Sc200.png';
import { useHover } from '@mantine/hooks';
import "../style/brownGuy.css";
import { Text } from '@mantine/core';

export default function BrownGuy() {
    const { hovered, ref } = useHover();
  return (
    <div className='container' ref={ref}>
      {hovered ? <div className='textContainerBrown'><Text size ="lg" c = "red">Hello</Text></div>: <></> }
    <Image
        className="brownGuy"
        src={hovered ? turnBrown : gifBrown}
        radius={"sm"}
        fit="fill"
        h={hovered ? 220 : 200}
        w={hovered ? 240 : 220}
      />
    </div>
  )
}
