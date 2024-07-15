"use client";

import { Typography, Box, Stack, IconButton, Button, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { getWrapper, getInnerWrapper } from '@/components/categories/BoxStyles';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const QuestionsData = ({ data, questionClickHandler }: any) => {
  const theme = useTheme();

  return(
    <Grid2
      container
      sx={{ display: 'flex', width: '100%', overflowX: 'auto' }}
    >
      <Grid2 xs={12}>
        <Box style={getWrapper(theme, `4px`)}>
          <Typography variant="subtitle1" textTransform="capitalize" mb={1}>
            Questions
          </Typography>
          {data?.Questions?.map((item: any, index: number) => (
            <Box key={index}>
              <div style={getInnerWrapper(theme, `4px`)}>
                <br />
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: -0.75 }}>
                  <Typography
                    onClick={() => questionClickHandler(item)}
                    variant="subtitle1"
                    sx={{
                      display: 'inline-block',
                      width: 'calc(100% - 34px)',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      verticalAlign: 'middle',
                      cursor: 'pointer',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {item?.Question}
                  </Typography>

                  <IconButton size="small" color="secondary" aria-controls="menu-comment" aria-haspopup="true">
                    <EditOutlined style={{ color: theme.palette.primary.main }} />
                  </IconButton>
                  <IconButton size="small" color="secondary" aria-controls="menu-comment" aria-haspopup="true">
                    <DeleteOutlined style={{ color: theme.palette.error.main }} />
                  </IconButton>
                </Stack>
              </div>
            </Box>
          ))}
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth>
              Add Question
            </Button>
          </Grid>
          </Box>
        </Grid2>
    </Grid2>
  )
}

export default QuestionsData;