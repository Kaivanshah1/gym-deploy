import React, { useState } from "react";
import Box from "@mui/material/Box";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HorizontalScrollbar from "../components/HorizontalScrollbar";

export const Home = () => {
  const [bodyPart, setbodyPart] = useState(["all"]);
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
        setExercises={setExercises}
      />
      {/* <HorizontalScrollbar /> */}
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  );
};
