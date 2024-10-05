import { Image } from '@mantine/core';
import idleGreen from "../assets/HWP_Gr_Idle_Sc200.gif";
import { useHover } from '@mantine/hooks';
import turnGreen from "../assets/HWP_Gr_Turn_Sc200.png";
import "../style/greenGuy.css";
import { Title } from '@mantine/core';
import arrow from "../assets/HWP_Yellow_Arrow_Sc200.gif";


export default function GreenGuy() {

  const { hovered, ref } = useHover();
    
  return (
    <div className='greenGuyContainer' ref={ref}>
    <div className={"greenGuy"}>
      {hovered ? 
      <div className={'textContainerGreen'}>
        <div className='arrowContainerGreen'>
        <Image
          src={arrow}
          fit='fill'
          h={25}
          w={25}
        />
          <div className='greenText'>
            <Title order={2} c={"red"}>Github</Title>
          </div>
        </div>
      </div>
      : <></> }
      <Image
        src={hovered ? turnGreen : idleGreen}
        radius={"sm"}
        fit="fill"
        h={ 200 }
        w={ 220 }
      >
      </Image>
    </div>
  </div>
  )
}
