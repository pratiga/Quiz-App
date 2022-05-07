import React from 'react'
import { Button,Typography} from "@mui/material"
import { Box } from "@mui/system";
import useAxios from "../hooks/useAxions";

const Question = () => {
  let apiUrl = `/api.php?amount= 10`;
  const {response,loading} = useAxios({url:apiUrl })
  console.log(response)
  return (
    <Box>
    <Typography variant="h4">Question 1</Typography>
    <Typography mt={5}>this is the question?</Typography>
    <Box mt={2}>
      <Button variant="contained">Answer 1</Button>
    </Box>
    <Box mt={5}>
    <Button variant="contained">Answer 2</Button>
    </Box>
    <Box mt={5}>
      Score: 2/6
    </Box>
    </Box>
  )
}

export default Question
