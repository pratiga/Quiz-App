import { Button, CircularProgress, Container, Typography } from '@mui/material'
import { Box } from "@mui/system"
import React from 'react'
import SelectField from '../components/SelectField'
import TextFieldComp from '../components/TextFieldComp'
import useAxions from '../hooks/useAxions'

const Setting = () => {
  const{ response, error, loading } = useAxions({ url: "/api_category.php"});
  if(loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
    <Container maxWidth="sm">
    <Typography variant='h2' fontWeight="bold">
    Quiz App
    </Typography>
    <form onSubmit={handleSubmit}>
      <SelectField label="Category" />
      <SelectField label="Difficulty" />
      <SelectField label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant='contained' type="submit">
         Get Started
        </Button>
      </Box>
    </form>
    </Container>
    </>
  )
}

export default Setting