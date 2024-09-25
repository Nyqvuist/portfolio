import '../style/Start.css';
import Cat from "./Cat";
import BlueGuy from "./BlueGuy";
import BrownGuy from "./BrownGuy";
import GreenGuy from './GreenGuy';
import Bonfire from "./Bonfire";
import Chest from "./Chest";


export default function Start() {

  return (
    <>
      <Bonfire/>
      <GreenGuy/>
      <Cat/>
      <BlueGuy/>
      <BrownGuy/>
      <Chest/>
    </>
  );
}
