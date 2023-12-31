import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const ExercisesCard = ({ exercises }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercises.id}`}>
      <img src={exercises.gifUrl} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercises.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercises.target}
        </Button>
        <Typography
          ml="21px"
          color="#000"
          mt="11px"
          fontWeight="bold"
          pb="10px"
          textTransform="capitalize"
          fontSize="22px"
        >
          {exercises.name}
        </Typography>
      </Stack>
    </Link>
  );
};

export default ExercisesCard;
