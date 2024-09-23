import { Image } from '@mantine/core';
import idleGreen from "../assets/HWP_Gr_Idle_Sc200.gif";
import { useHover } from '@mantine/hooks';
import turnGreen from "../assets/HWP_Gr_Turn_Sc200.png";
import "../style/greenGuy.css";
import { Text } from '@mantine/core';


export default function GreenGuy() {

  const { hovered, ref } = useHover();
    
  return (
    <div className='container' ref={ref}>
      {hovered ? <div className='textContainerGreen'><Text size ="lg" c = "red">GitHub</Text></div>: <></> }
    <Image
        className="greenGuy"
        src={hovered ? turnGreen : idleGreen}
        radius={"sm"}
        fit="fill"
        h={hovered ? 220 : 200}
        w={hovered ? 240 : 220}
      />
    </div>
  )
}
