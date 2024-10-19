import '../style/Start.css';
import Cat from "./Cat";
import BlueGuy from "./BlueGuy";
import BrownGuy from "./BrownGuy";
import GreenGuy from './GreenGuy';
import Bonfire from "./Bonfire";
import Chest from "./Chest";
import { Title } from '@mantine/core';


export default function Start() {

  return (
    <div className='main-page-div'>
      <div className='blackBar'></div>
      <div className='main-content-div'>
        <div className='titleContainer'>
          <div className='titleText'>
          <Title order={1}> Hassan Shirazi
          </Title>
          </div>
          <div className='chooseCharacter'>
            <Title order={2}>
              Choose Your Character!
            </Title>
          </div>
        </div>
          <Bonfire/>
          <GreenGuy/>
          <Cat/>
          <BlueGuy/>
          <BrownGuy/>
          <Chest/>
      </div>
      <div className='blackBar'></div>
    </div>
  );
}
