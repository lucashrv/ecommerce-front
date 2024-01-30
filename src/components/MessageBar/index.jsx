import * as React from 'react';
import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Slide } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { messageActions, selectMessage } from '../../redux/slices/messageSlice';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MessageBar(props) {

  const {
    open,
    label,
    variant
  } = props

  const dispatch = useDispatch()
  const message = useSelector(selectMessage.state)

  function transitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  const close = (e, reason) => {
    dispatch(messageActions.hideMessage())
  }

  return (<>
    {(open || message.show) && (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={true}
          TransitionComponent={transitionLeft}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          autoHideDuration={4000}
          onClose={close}
        >
          <Alert
            onClose={close}
            severity={variant ?? message.variant}
            sx={{ width: '100%' }}
          >
            {label ?? message.label}
          </Alert>
        </Snackbar>
      </Stack>
    )}
  </>)
}

