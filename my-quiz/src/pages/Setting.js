import { Button, CircularProgress, Container, Typography } from '@mui/material'
import { Box } from "@mui/system"
import React from 'react'
import { NavLink } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import SelectField from '../components/SelectField'
import TextFieldComp from '../components/TextFieldComp'
import useAxions from '../hooks/useAxions'

const Setting = () => {
  const{ response, error, loading } = useAxions({ url: "/api_category.php"});
  // const navs = useHistory()
  if(loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  
  if (error) {
    return (
      <Typography variant='h6' mt={20} color="red">
      some went wrong
      </Typography>
    );
  }
  
  
  const difficultyOptions = [
    {id:"easy", name:"Easy"},
    {id:"medium", name:"Medium"},
    {id:"hard", name:"Hard"},
  ]
  
  const typeOptions = [
    {id:"multiple", name: "Multiple Choise"},
    {id:"boolean",name:"True/False"},
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // navs.push("/question");
  };
  
  
  return (
    <>
    <Container maxWidth="sm">
    <Typography variant='h2' fontWeight="bold">
    Quiz App
    </Typography>
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options={difficultyOptions} label="Difficulty" />
      <SelectField options= {typeOptions} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
      <NavLink to="/question">
        <Button fullWidth variant='contained' type="submit">
         Get Started
        </Button>
        </NavLink>
      </Box>
    </form>
    </Container>
    </>
  )
}

export default Setting