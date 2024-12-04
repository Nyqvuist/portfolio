import '../style/Start.css';
import Cat from "./Cat";
import BlueGuy from "./BlueGuy";
import BrownGuy from "./BrownGuy";
import GreenGuy from './GreenGuy';
import Bonfire from "./Bonfire";
import Chest from "./Chest";


export default function Start() {

  return (
    <div className='main-page-div'>
      <div className='main-content-div'>
        <div className='titleContainer'>
          <div className='titleText'>
          <h1> Hassan Shirazi
          </h1>
          </div>
          <div className='chooseCharacter'>
            <h2>
              Choose Your Character!
            </h2>
          </div>
        </div>
          <Bonfire/>
          <GreenGuy/>
          <Cat/>
          <BlueGuy/>
          <BrownGuy/>
          <Chest/>
      </div>
    </div>
  );
}
