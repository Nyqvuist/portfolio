import { Image } from '@mantine/core';
import gifBlue from '../assets/HWP_Blu_Idle_Sc200.gif';
import turnBlue from '../assets/HWP_Blu_Turn_Sc200.png';
import { useHover } from '@mantine/hooks';
import "../style/blueGuy.css";
import { Title } from '@mantine/core';


export default function BlueGuy() {

  const { hovered, ref } = useHover();
    
  return (
    <div className='blueGuyContainer' ref={ref}>
      <div className={"blueGuy"}>
        {hovered ? 
        <div className={'textContainerBlue'}><Title order={3} c={"red"}>LinkedIn</Title></div>
        : <></> }
        <Image
          src={hovered ? turnBlue : gifBlue}
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
