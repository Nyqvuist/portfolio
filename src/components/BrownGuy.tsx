import { Image } from '@mantine/core';
import gifBrown from '../assets/HWP_Brn_Idle_Sc200.gif';
import turnBrown from '../assets/HWP_Brn_Turn_Sc200.png';
import { useHover } from '@mantine/hooks';
import "../style/brownGuy.css";
import { Title } from '@mantine/core';
import arrow from "../assets/HWP_Yellow_Arrow_Sc200.gif";

export default function BrownGuy() {
    const { hovered, ref } = useHover();

  return (
    <div className='brownGuyContainer' ref={ref}>
    <div className={"brownGuy"}>
      {hovered ? 
      <div className={'textContainerBrown'}>
      <div className='arrowContainerBrown'>
      <Image
        src={arrow}
        fit='fill'
        h={35}
        w={30}
      />
      </div>
        <div className='brownText'>
          <Title order={3} c={"red"}>Hello</Title>
        </div>
    </div>
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
