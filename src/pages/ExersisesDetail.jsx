import React from "react";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import { Box } from "@mui/material";
import Details from "../components/Details";
import ExercisesVideo from "../components/ExercisesVideo";
import SimilarExercises from "../components/SimilarExercises";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ExersisesDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setexerciseVideo] = useState({});
  const [targetMuscleExercises, settargetMuscleExercises] = useState([]);
  const [equipmentExercises, setequipmentExercises] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDburl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exercisesDetailData = await fetchData(
        `${exerciseDburl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exercisesDetailData);

      const youtubeData = await fetchData(
        `${youtubeSearchUrl}/search/q=${exerciseDetail.name}`,
        youtubeOptions
      );
      setexerciseVideo(youtubeData);

      const targetMuscleExerciseData = await fetchData(
        `${exerciseDburl}/exercises/target/${exercisesDetailData.target}`,
        exerciseOptions
      );
      settargetMuscleExercises(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchData(
        `${exerciseDburl}/exercises/equipment/${exercisesDetailData.equipment}`,
        exerciseOptions
      );
      setequipmentExercises(equipmentExerciseData);
    };
    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExercisesVideo
        exerciseVideo={exerciseVideo}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExersisesDetail;
