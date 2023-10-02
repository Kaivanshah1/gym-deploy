import React from "react";
import BodypartImg from "../assets/assets/icons/body-part.png";
import TargetImg from "../assets/assets/icons/target.png";
import EquipmentImg from "../assets/assets/icons/equipment.png";
import { Button, Stack, Typography } from "@mui/material";

const Details = ({ exerciseDetail }) => {
  const { name, bodyPart, target, equipment, gifUrl } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodypartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h5">
          Exercises keep you strong. {name} bup is one of the best <br />{" "}
          exercises to target your {target}. It will help you improve your mood
          and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography varient="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
