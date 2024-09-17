import { Image } from '@mantine/core';
import idleGreen from "../assets/HWP_Gr_Idle_Sc200.gif";
import { useHover } from '@mantine/hooks';
import turnGreen from "../assets/HWP_Gr_Turn_Sc200.png";
import "../style/greenGuy.css";


export default function GreenGuy() {

  const { hovered, ref } = useHover();
    
  return (
    <div ref={ref}>
    <Image
        className="greenGuy"
        src={hovered ? turnGreen : idleGreen}
        radius={"sm"}
        fit="fill"
        h={200}
        w={250}
      />
    </div>
  )
}
