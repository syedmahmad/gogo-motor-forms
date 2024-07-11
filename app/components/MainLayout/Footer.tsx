import RouterLink from 'next/link';

// material-ui
import { Link, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
    <Typography variant="caption">&copy; All rights reserved</Typography>
    <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
      <RouterLink href="#" target="_blank">
        About us
      </RouterLink>
      <RouterLink href="#" target="_blank">
        Privacy
      </RouterLink>
      <RouterLink href="#" target="_blank">
        Terms
      </RouterLink>
    </Stack>
  </Stack>
);

export default Footer;
