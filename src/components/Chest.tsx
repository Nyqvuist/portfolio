import React from "react";
import chestOpen from "../assets/HWP_Chest_Opening_Sc200.gif";
import chestClosed from "../assets/HWP_Chest_Eye_Sc200.gif";
import { Image } from "@mantine/core";
import "../style/chest.css";

export default function Chest() {
  const [chest, setChest] = React.useState(false);
  return (
    <Image
      className="chest"
      onClick={() => setChest((prevMode) => !prevMode)}
      src={chest ? chestOpen : chestClosed}
      radius={"sm"}
      fit="fill"
      h={100}
      w={180}
    />
  );
}
