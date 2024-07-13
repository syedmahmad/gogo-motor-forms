import { ReactNode } from 'react';

// material-ui
import { Box, Grid } from '@mui/material';
import Image from "next/image";

// project import
import logo3 from '@/assets/images/logo3.png';
import AuthCard from './AuthCard';

// assets
import AuthBackground from '@/assets/images/auth/AuthBackground';

interface Props {
  children: ReactNode;
}

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children }: Props) => (
  <Box sx={{ minHeight: '100vh' }}>
    <AuthBackground />
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      sx={{
        minHeight: '100vh'
      }}
    >
      <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
      <Image
            src={logo3}
            alt="logo"
            width={200}
            height={35}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
      </Grid>
    </Grid>
  </Box>
);

export default AuthWrapper;
