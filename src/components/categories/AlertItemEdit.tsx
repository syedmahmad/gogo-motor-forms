// material-ui
import { Button, Dialog, DialogContent, Stack, Typography } from '@mui/material';

// project import
import Avatar from '@/components/@extended/Avatar';
import { PopupTransition } from '@/components/@extended/Transitions';

// assets
import { EditFilled } from '@ant-design/icons';

// types
interface Props {
  title: string;
  open: boolean;
  handleClose: (status: boolean) => void;
}

// ==============================|| KANBAN BOARD - ITEM Edit ||============================== //

export default function AlertItemEdit({ title, open, handleClose }: Props) {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      TransitionComponent={PopupTransition}
      keepMounted
      maxWidth="xs"
      aria-labelledby="item-delete-title"
      aria-describedby="item-delete-description"
    >
      <DialogContent sx={{ mt: 2, my: 1 }}>
        <Stack alignItems="center" spacing={3.5}>
          <Avatar color="info" sx={{ width: 72, height: 72, fontSize: '1.75rem' }}>
            <EditFilled />
          </Avatar>
          <Stack spacing={2}>
            <Typography variant="h4" align="center">
              Are you sure you want to Edit?
            </Typography>
            <Typography align="center">
              By Editing
              <Typography variant="subtitle1" component="span">
                {' '}
                &quot;{title}&quot;{' '}
              </Typography>
              task, Its details will also be edited.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ width: 1 }}>
            <Button fullWidth onClick={() => handleClose(false)} color="secondary" variant="outlined">
              Cancel
            </Button>
            <Button fullWidth color="info" variant="contained" onClick={() => handleClose(true)} autoFocus>
              Edit
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
