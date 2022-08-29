import React from 'react';
import { Typography, Box } from '@mui/material';
import { Calculation } from '../class/Calculation';

export default function Response({ value }) {
  const objFinobacci = new Calculation(value);
  return (
    <Box mt={4} display="flex" alignItems="center" justifyContent="center">
      <Typography variant="h3">{objFinobacci.getFinobacci()}</Typography>
    </Box>
  )
}
