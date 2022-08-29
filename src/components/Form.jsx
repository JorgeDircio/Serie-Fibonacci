import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function Form({ setValue }) {
  const [input, setInput] = useState(0);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const hadleSubmit = (event, x) => {
    event.preventDefault();
    setValue(input);
  }
  return (
    <Box mt={12} display="flex" alignItems="center" justifyContent="center">
      <form onSubmit={hadleSubmit}>
        <TextField id="outlined-basic" value={input} onChange={handleChange} label="Numero para serie Fibonacci" variant="outlined" />
        <Box mt={1} display="flex" alignItems="center" justifyContent="center">
          <Button type="submit" variant="contained">Calcular</Button>
        </Box>
      </form>
    </Box>
  )
}
