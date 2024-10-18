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
import gavlans from "../assets/Gavlans_Game_Logo_v2.png";
import hashashin from "../assets/Hassan_Discord_Lion_Logo.png";
import statue from "../assets/Statue 112x112.png";
import { useHover } from '@mantine/hooks';
import arrow from "../assets/HWP_Yellow_Arrow_Sc200.gif";

export default function Chest() {
  const { hovered, ref } = useHover();
  const [chest, setChest] = React.useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const heightAndWidth = 250;
  const [details, setDetails] = React.useState("This site was created using React, MongoDB, Node.js, Express.js, and Material-UI. This is a fast paced trivia game where the faster the player answers the question right, the more points they get. Fullstack website hosted firebase with a custom database using MongoDB.");
  const [title, setTitle] = React.useState('Gavlans Game Website');
  const [icon, setIcon] = React.useState(gavlans);

  const discordClick = () => {
    setDetails("A discord bot created with discord.js. Using multiple API's like Pokemon and Steam to give users information with slash commands. MongoDB is being used for some commands, and the bot is hosted using AWS.");
    setTitle('Hashashin Discord Bot');
    setIcon(hashashin);
  };

  const gavlansClick = () => {
    setDetails("This site was created using React, MongoDB, Node.js, Express.js, and Material-UI. This is a fast paced trivia game where the faster the player answers the question right, the more points they get. Fullstack website hosted firebase with a custom database using MongoDB.");
    setTitle('Gavlans Game Website');
    setIcon(gavlans);
  }

  const gameClick = () => {

    setDetails('Clicker game made in Unity2D. Game focuses on clicking the statue to gain currency and purchase currency generators. Random events spawn throughout playing the game.');
    setTitle('Idyllic Statue');
    setIcon(statue);

  }


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
                    src={gavlans}
                    fit="fill"
                    onClick={gavlansClick}
                  />
                </div>
                </div>
                <div className="discord-slot">
                <Image
                  className="inv_slot"
                  src={box}
                  fit="fill"
                  h={`${heightAndWidth}`}
                  w={`${heightAndWidth}`}
                />
                <div className={"discord-slot-icon absolute"}>
                  <Image
                  src={hashashin}
                  fit="fill"
                  onClick={discordClick}
                  />
                </div>
                </div>
              </Grid.Col>
              <Grid.Col span={6}>
                <div className="game-slot">
                <Image
                  className="inv_slot"
                  src={box}
                  fit="fill"
                  h={`${heightAndWidth}`}
                  w={`${heightAndWidth}`}
                />
                <div className={"game-slot-icon absolute"}>
                  <Image
                    src={statue}
                    fit="fill"
                    onClick={gameClick}
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
                  src={icon}
                  fit="fill"
                />
              </div>
              <div className={"project-title-div absolute"}>
                <Text className='title-text'>{title}</Text>
              </div>
              <div className={"project-details-div absolute"}>
                <Text className='details-text'>{details}</Text>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Modal>
      <div className="button-div" onClick={open}>
        <div className="chestContainer" ref={ref}>
        {hovered ? <div className='arrowContainerChest'>
        <Image
          src={arrow}
          fit='fill'
          h={35}
          w={30}
        />
        </div> : <></>}
        <Image
          onClick={() => setChest((prevMode) => !prevMode)}
          src={opened ? chestOpen : chestClosed}
          radius={"sm"}
          fit="fill"
          h={100}
          w={180}
        />
        </div>
      </div>
    </>
  );
}
