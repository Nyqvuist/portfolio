import { Image } from '@mantine/core';
import gifBrown from '../assets/HWP_Brn_Idle_Sc200.gif';
import turnBrown from '../assets/HWP_Brn_Turn_Sc200.png';
import { useHover } from '@mantine/hooks';
import "../style/brownGuy.css";
import { Title } from '@mantine/core';

export default function BrownGuy() {
    const { hovered, ref } = useHover();

  return (
    <div className='brownGuyContainer' ref={ref}>
    <div className={"brownGuy"}>
      {hovered ? 
      <div className={'textContainerBrown'}><Title order={3} c={"red"}>Hello</Title></div>
      : <></> }
      <Image
        src={hovered ? turnBrown : gifBrown}
        radius={"sm"}
        fit="fill"
        h={ 220 }
        w={ 220 }
      >
      </Image>
    </div>
  </div>
  )
}
