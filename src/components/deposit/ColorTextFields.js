import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function ColorTextFields({ setPayout, ...props }) {
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    setValue(e.target.value);
    setPayout(e.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        label="Deposit Amount"
        color="secondary"
        value={value}
        type="number"
        onChange={handleChange}
        focused
      />
    </Box>
  );
}
