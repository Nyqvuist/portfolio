import React from "react";
import chestOpen from "../assets/HWP_Chest_Opening_Sc200.gif";
import chestClosed from "../assets/HWP_Chest_Eye_Sc200.gif";
import { Image } from "@mantine/core";
import "../style/chest.css";
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Text } from "@mantine/core";
import box from "../assets/HWP_Ind_Inv_Slot_1920x1080.png";
import { Grid } from '@mantine/core';
import textfield from "../assets/HWP_Inner_Inv_w_Textbox_1920x1080.png";
import divider from "../assets/HWP_Inv_Divider_1920x1080.png";

export default function Chest() {
  const [chest, setChest] = React.useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        className="modal"
        opened={opened}
        onClose={close}
        size={"100%"}
        withCloseButton={false}
      >
        
        <Grid align="stretch">
          <Grid.Col span={6} className="colone">
          <Grid gutter={"md"}>
            <Grid.Col span={3}>
            <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
            <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
            <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
            <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
            </Grid.Col>
            <Grid.Col span={3}>
            <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
            <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
            <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
            <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
            </Grid.Col>
            <Grid.Col span={3}>
            <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
          <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
          <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
          <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
            </Grid.Col>
            <Grid.Col span={3}>
            <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
          <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
          <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
          <Image className="inv_slot" src={box} fit="fill" h={150} w={150} />
            </Grid.Col>
          </Grid>
          </Grid.Col>
        <Grid.Col span={6}>
          <Image className="inv_description" src={textfield} fit="fill" h={600} w={950} />
          <div className="description_div">
          <Text >HELLLO</Text>
          </div>
        </Grid.Col>
        </Grid>
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
