import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../assets/assets/icons/gym.png";
const Bodypart = ({ item, bodyPart, setbodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
    >
      <img src={Icon} style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        textTransform="capatalize"
        color="#3A1212"
        fontFamily="Alegreya"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default Bodypart;
