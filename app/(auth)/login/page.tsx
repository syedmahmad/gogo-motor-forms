import { Metadata } from 'next';
import Link from 'next/link';
// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from './_components/AuthWrapper';
import AuthLogin from './_components/AuthLogin';

export const metadata: Metadata = {
  title: 'Login',
};

// ================================|| LOGIN ||================================ //

const Login = () => {

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
            <Typography
              sx={{ textDecoration: 'none' }}
              color="primary"
            >
              <Link href="/register">Don&apos;t have an account?</Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;