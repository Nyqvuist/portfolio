import { Image } from '@mantine/core';
import gifBrown from '../assets/HWP_Brn_Idle_Sc200.gif';
import turnBrown from '../assets/HWP_Brn_Turn_Sc200.png';
import { useHover } from '@mantine/hooks';
import "../style/brownGuy.css";

export default function BrownGuy() {
    const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
    <Image
        className="brownGuy"
        src={hovered ? turnBrown : gifBrown}
        radius={"sm"}
        fit="fill"
        h={200}
        w={220}
      />
    </div>
  )
}
