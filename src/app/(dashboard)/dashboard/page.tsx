'use client';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// assets
import {
  DollarCircleFilled,
  ScheduleFilled,
  ShoppingFilled,
} from '@ant-design/icons';
import Metrix from '@/components/cards/statistics/Metrix';

// ===========================|| WIDGET - STATISTICS ||=========================== //

const DashboardPage = () => {
  const theme = useTheme();

  return (
    <>
    <Typography variant="h2" mt={5}>Dashboard</Typography>
    <Grid container spacing={3} mt={1}>
      <Grid item xs={12} lg={4} sm={6}>
        <Metrix
          primary="Revenue"
          secondary="$4,500"
          content="$50,032 Last Month"
          color={theme.palette.primary.main}
          iconPrimary={DollarCircleFilled}
        />
      </Grid>
      <Grid item xs={12} lg={4} sm={6}>
        <Metrix
          primary="Orders Received"
          secondary="486"
          content="20% Increase"
          color={theme.palette.warning.main}
          iconPrimary={ScheduleFilled}
        />
      </Grid>
      <Grid item xs={12} lg={4} sm={12}>
        <Metrix
          primary="Total Sales"
          secondary="1641"
          content="$1,055 Revenue Generated"
          color={theme.palette.success.main}
          iconPrimary={ShoppingFilled}
        />
      </Grid>
    </Grid>
    </>
  );
};

export default DashboardPage;
