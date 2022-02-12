import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ payout, ...props }) {
  const buttonClicked = async () => {
    console.log(payout, 'payout');

    document.getElementById('die-1').dataset.roll = 6;
    document.getElementById('die-2').dataset.roll = 3;
    document.getElementById('die-3').dataset.roll = 5;
    document.getElementById('die-4').dataset.roll = 4;
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" className="button" id="roll-button" onClick={buttonClicked}>
        ROLL DICE
      </Button>
    </Stack>
  );
}
