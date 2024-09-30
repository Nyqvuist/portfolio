import React from "react";
import chestOpen from "../assets/HWP_Chest_Opening_Sc200.gif";
import chestClosed from "../assets/HWP_Chest_Eye_Sc200.gif";
import { Image } from "@mantine/core";
import "../style/chest.css";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { Text } from "@mantine/core";
import box from "../assets/HWP_Ind_Inv_Slot_1920x1080.png";
import { Grid } from "@mantine/core";
import textfield from "../assets/HWP_Inner_Inv_w_Textbox_1920x1080.png";
import test from "../assets/Hassan_Lion_Logo_Alt.png";

export default function Chest() {
  const [chest, setChest] = React.useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const heightAndWidth = 250;
  const [details, setDetails] = React.useState('');
  const [title, setTitle] = React.useState('');

  const handleClick = () => {
    setDetails("This site was created using React, MongoDB, Node.js, Express.js, and Material-UI. This is a fast paced trivia game where the faster the player answers the question right, the more points they get. Fullstack website hosted firebase with a custom database using MongoDB.");
    setTitle('Gavlans Game Website');
  };


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
          <Grid.Col span={6} className="portfolio-item-col">
            <Grid gutter={"sm"}>
              <Grid.Col span={6}>
                <div className="gavlans-game-slot">
                <Image
                  className="inv_slot"
                  src={box}
                  fit="fill"
                  h={`${heightAndWidth}`}
                  w={`${heightAndWidth}`}
                />
                <div className={"gg-slot-icon absolute"}>
                  <Image
                    src={test}
                    fit="fill"
                    onClick={handleClick}
                  />
                </div>
                </div>
                <Image
                  className="inv_slot"
                  src={box}
                  fit="fill"
                  h={`${heightAndWidth}`}
                  w={`${heightAndWidth}`}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Image
                  className="inv_slot"
                  src={box}
                  fit="fill"
                  h={`${heightAndWidth}`}
                  w={`${heightAndWidth}`}
                />
                <Image
                  className="inv_slot"
                  src={box}
                  fit="fill"
                  h={`${heightAndWidth}`}
                  w={`${heightAndWidth}`}
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className="description_div">
              <Image
                className="inv_description"
                src={textfield}
                fit="fill"
                h={600}
                w={950}
              />
              <div className={"project-icon-div absolute"}>
                <Image
                  src={test}
                  fit="fill"
                />
              </div>
              <div className={"project-title-div absolute"}>
                <Text size="xl">{title}</Text>
              </div>
              <div className={"project-details-div absolute"}>
                <Text size="xl">{details}</Text>
              </div>
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
