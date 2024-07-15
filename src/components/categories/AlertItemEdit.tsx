"use client"
import { useState, ChangeEvent, useLayoutEffect, useEffect } from 'react';
// material-ui
import { Button, Dialog, DialogContent, Stack, TextField, Typography } from '@mui/material';

// project import
import Avatar from '@/components/@extended/Avatar';
import { PopupTransition } from '@/components/@extended/Transitions';

// assets
import { EditFilled } from '@ant-design/icons';

// types
interface Props {
  itemTitle: string;
  open: boolean;
  handleClose: (status: boolean) => void;
}

export default function AlertItemEdit({ itemTitle, open, handleClose }: Props) {

  const [title, setTitle] = useState<string>('');
  const [isTitle, setIsTitle] = useState(false);
  const handleTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    if (newTitle.length <= 0) {
      setIsTitle(true);
    } else {
      setIsTitle(false);
    }
  };

  useLayoutEffect(() => {
    setTitle(itemTitle);

    // eslint-disable-next-line
  }, []);

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={() => handleClose(false)}
      TransitionComponent={PopupTransition}
      maxWidth="xs"
    >
      <DialogContent sx={{ mt: 2, my: 1 }}>
        <Stack alignItems="center" spacing={3.5}>
          <Avatar color="primary" sx={{ width: 72, height: 72, fontSize: '1.75rem' }}>
            <EditFilled />
          </Avatar>
          <Stack spacing={2}>
            <Typography variant="h4" align="center">
              By Editing
              <Typography variant="subtitle1" component="span">
                {' '}
                &quot;{itemTitle}&quot;{' '}
              </Typography>
              task, Its details will also be edited.
            </Typography>
          </Stack>

          <TextField
            fullWidth
            value={title}
            variant='outlined'
            size='medium'
            onChange={handleTaskTitle}
            onKeyUp={() => console.log("keyup")}
            helperText={isTitle ? 'Task title is required.' : ''}
            error={isTitle}
          />

          <Stack direction="row" spacing={2} sx={{ width: 1 }}>
            <Button fullWidth onClick={() => handleClose(false)} color="secondary" variant="outlined">
              Cancel
            </Button>
            <Button fullWidth color="primary" variant="contained" onClick={() => handleClose(true)} autoFocus>
              Edit
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
