import { Image } from '@mantine/core';
import gifBlue from '../assets/HWP_Blu_Idle_Sc200.gif';
import turnBlue from '../assets/HWP_Blu_Turn_Sc200.png';
import { useHover } from '@mantine/hooks';
import "../style/blueGuy.css";
import { Text } from '@mantine/core';


export default function BlueGuy() {

  const { hovered, ref } = useHover();
    
  return (
    <div className='container' ref={ref}>
      {hovered ? <div className='textContainerBlue'><Text size ="lg" c = "red">LinkedIn</Text></div>: <></> }
    <Image
        className="blueGuy"
        src={hovered ? turnBlue : gifBlue}
        radius={"sm"}
        fit="fill"
        h={hovered ? 220 : 200}
        w={hovered ? 240 : 220}
      />
    </div>
  )
}
