import React from "react";
import chestOpen from "../assets/HWP_Chest_Opening_Sc200.gif";
import chestClosed from "../assets/HWP_Chest_Eye_Sc200.gif";
import { Image } from "@mantine/core";
import "../style/chest.css";
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Text } from "@mantine/core";
import box from "../assets/HWP_Ind_Inv_Slot_1920x1080.png";

export default function Chest() {
  const [chest, setChest] = React.useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        className="modal"
        opened={opened}
        onClose={close}
        size={"65%"}
        withCloseButton={false}
      >
        <Image className="inv_slot" src={box} fit="fill" h={120} w={120} />
        <Text>what the hell is going on</Text>
        <Text>what the hell is going on</Text>
        <Text>what the hell is going on</Text>
        <Text>what the hell is going on</Text>
      </Modal>
      <div className="button-div" onClick={open}>
        <Image
          className="chest"
          onClick={() => setChest((prevMode) => !prevMode)}
          src={opened ? chestOpen : chestClosed}
          radius={"sm"}
          fit="fill"
          h={100}
          w={180}
        />
      </div>
    </>
  );
}
