import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ExercisesCard } from "./ExercisesCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [pages, setPages] = useState(1);
  const paginate = (e, value) => {
    setPages(value);
  };
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "30px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.length > 0 &&
          exercises
            .slice(pages * 9 - 9, pages * 9)
            .map((item, index) => (
              <ExercisesCard key={index} exercises={item}></ExercisesCard>
            ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {/* {[...Array(Math.ceil(exercises.length / 5))].map((item, i) => (
          <h1 key={i}>{i + 1}</h1>
        ))} */}
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={pages}
            onChange={(e, value) => paginate(e, value)}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
