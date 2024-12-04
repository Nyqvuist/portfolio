import { Image } from '@mantine/core';
import gifBlue from '../assets/HWP_Blu_Idle_Sc200.gif';
import turnBlue from '../assets/HWP_Blu_Turn_Sc200.png';
import { useHover } from '@mantine/hooks';
import "../style/blueGuy.css";
import arrow from "../assets/HWP_Yellow_Arrow_Sc200.gif";


export default function BlueGuy() {

  const { hovered, ref } = useHover();
    
  return (
    <div className="blueGuyContainer" ref={ref}>
      <div className={"blueGuy"}>
        {hovered ? (
          <div className={"textContainerBlue"}>
            <div className="arrowContainerBlue">
              <Image src={arrow} fit="fill" />
            </div>
            <div className="blueText">
              <h3>
                LinkedIn
              </h3>
            </div>
          </div>
        ) : (
          <></>
        )}
        <Image
          className="blueGuyCharImg"
          src={hovered ? turnBlue : gifBlue}
          radius={"sm"}
          fit="fill"
        ></Image>
      </div>
    </div>
  );
}
