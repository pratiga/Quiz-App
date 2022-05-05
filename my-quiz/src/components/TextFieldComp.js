import { FormControl, TextField} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TextFieldComp = () => {
    const handleChange = (e) => {
        e.preventDefault()
    };
  return (
      <>
    <Box mt={3} width="100">
    <FormControl>
    <TextField onChange={handleChange} variant="outlined" label="Amount of questions" type="number" size="small"></TextField>
    </FormControl>
    </Box>
    </>
  );
}

export default TextFieldComp