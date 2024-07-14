"use client";

import { Typography, Box, Stack, IconButton, Button, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import AddItem from '@/components/categories/AddItem';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { getWrapper, getInnerWrapper } from '@/components/categories/BoxStyles';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const SubQuestionData = ({ data, subQuestionTypeClickHandler }: any) => {
  const theme = useTheme();

  return(
    <Grid2
      container
      sx={{ display: 'flex', width: '100%', overflowX: 'auto' }}
    >
      <Grid2 xs={12}>
        <Box style={getWrapper(theme, `4px`)}>
          <Typography variant="subtitle1" textTransform="capitalize" mb={1}>
            Sub Question
          </Typography>
          <Box>
            <div style={getInnerWrapper(theme, `4px`)}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: -0.75 }}>
                <Typography
                  onClick={() => subQuestionTypeClickHandler(data["Sub Question"])}
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
                  {data["Sub Question"]["Sub Question"]}
                </Typography>

                <IconButton size="small" color="secondary" aria-controls="menu-comment" aria-haspopup="true">
                  <EditOutlined />
                </IconButton>
                <IconButton size="small" color="secondary" aria-controls="menu-comment" aria-haspopup="true">
                  <DeleteOutlined />
                </IconButton>
              </Stack>
            </div>
          </Box>
     
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth>
              Add SubQuestion
            </Button>
          </Grid>
          </Box>
        </Grid2>
    </Grid2>
  )
}

export default SubQuestionData;