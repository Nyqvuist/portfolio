import { Image } from '@mantine/core';
import gifBlue from '../assets/HWP_Blu_Idle_Sc200.gif';
import turnBlue from '../assets/HWP_Blu_Turn_Sc200.png';
import { useHover } from '@mantine/hooks';
import "../style/blueGuy.css";


export default function BlueGuy() {

  const { hovered, ref } = useHover();
    
  return (
    <div ref={ref}>
    <Image
        className="blueGuy"
        src={hovered ? turnBlue : gifBlue}
        radius={"sm"}
        fit="fill"
        h={200}
        w={220}
      />
    </div>
  )
}
