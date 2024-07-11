import { useRef, useState, ReactNode, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, ButtonBase, CardContent, ClickAwayListener, Grid, Paper, Popover, Popper, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material';

// project import
import ProfileTab from './ProfileTab';
import SettingTab from './SettingTab';
import Avatar from '../../../../@extended/Avatar';
import MainCard from '../../../../MainCard';
import Transitions from '../../../../@extended/Transitions';
import IconButton from '../../../../@extended/IconButton';

// assets
import avatar1 from '../../../../../assets/images/users/avatar-1.png';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

// types
import { ThemeMode } from '../../../../../types/config';

interface TabPanelProps {
  children?: ReactNode;
  dir?: string;
  index: number;
  value: number;
}

// tab panel wrapper
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `profile-tab-${index}`,
    'aria-controls': `profile-tabpanel-${index}`
  };
}

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  const theme = useTheme();
  const router = useRouter();
  const anchorRef = useRef<any>(null);

  const handleLogout = async () => {
    try {
      router.push(`/login`);
    } catch (err) {
      console.error(err);
    }
  };

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const iconBackColorOpen = theme.palette.mode === ThemeMode.DARK ? 'grey.200' : 'grey.300';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          bgcolor: open ? iconBackColorOpen : 'transparent',
          borderRadius: 1,
          '&:hover': { bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter' },
          '&:focus-visible': {
            outline: `2px solid ${theme.palette.secondary.dark}`,
            outlineOffset: 2
          }
        }}
        ref={anchorRef}
        aria-label="open profile"
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          {/* @ts-ignore */}
          <Avatar src="@/app/src/assets/images/users/avatar-1.png" size="xs" />
          <Typography variant="subtitle1">JWT User</Typography>
        </Stack>
      </ButtonBase>
      <Popover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorReference="anchorEl"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
        role={undefined}
        disablePortal
      >
            <Paper
              sx={{
                boxShadow: theme.customShadows.z1,
                width: 290,
                minWidth: 240,
                maxWidth: 290,
                [theme.breakpoints.down('md')]: {
                  maxWidth: 250
                }
              }}
            >
              <CardContent sx={{ px: 2.5, pt: 3 }}>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      {/* @ts-ignore */}
                      <Avatar src={avatar1} sx={{ width: 32, height: 32 }} />
                      <Stack>
                        <Typography variant="h6">JWT User</Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Logout">
                      <IconButton size="large" sx={{ color: 'text.primary' }} onClick={handleLogout}>
                        <LogoutOutlined />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </CardContent>
              <TabPanel value={value} index={0} dir={theme.direction}>
                <ProfileTab handleLogout={handleLogout} />
              </TabPanel>
            </Paper>
      </Popover>
    </Box>
  );
};

export default Profile;
