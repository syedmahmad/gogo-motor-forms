"use client";

import { Typography, Box, Stack, IconButton, Button, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { getWrapper, getInnerWrapper } from '@/components/categories/BoxStyles';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AlertItemDelete from "./AlertItemDelete";
import { useState } from "react";
import AlertItemEdit from "./AlertItemEdit";

const CategoriesData = ({ data, categoryClickHandler }: any) => {
  const theme = useTheme();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>();
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleClickDeleteIcon = (item: any) => {
    setSelectedCategory(item)
    setOpenDeleteModal(true)
  }

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false)
  }

  const handleClickEditIcon = (item: any) => {
    setSelectedCategory(item)
    setOpenEditModal(true)
  }

  const handleCloseEditModal = () => {
    setOpenEditModal(false)
  }

  return(
    <>
    <Grid2
      container
      sx={{ display: 'flex', width: '100%', overflowX: 'auto' }}
    >
      <Grid2 xs={12}>
        <Box style={getWrapper(theme, `4px`)}>
          <Typography variant="subtitle1" textTransform="capitalize" mb={1}>
            Categories
          </Typography>
          {data?.map((item: any, index: number) => (
            <Box key={index}>
              <div style={getInnerWrapper(theme, `4px`)}>
                <br />
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: -0.75 }}>
                  <Typography
                    onClick={() => categoryClickHandler(item)}
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
                    {item?.Category}
                  </Typography>

                  <IconButton size="small" color="secondary" aria-controls="menu-comment" aria-haspopup="true" onClick={() => handleClickEditIcon(item)}>
                    <EditOutlined style={{ color: theme.palette.primary.main }} />
                  </IconButton>
                  <IconButton size="small" color="secondary" aria-controls="menu-comment" aria-haspopup="true" onClick={() => handleClickDeleteIcon(item)}>
                    <DeleteOutlined style={{ color: theme.palette.error.main }} />
                  </IconButton>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: -0.75 }}>
                  <Typography
                    onClick={() => categoryClickHandler(item)}
                    variant="body1"
                    color={theme.palette.primary.main}
                  >
                    isActive
                  </Typography>
                </Stack>
              </div>
            </Box>
          ))}
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth>
              Add Category
            </Button>
          </Grid>
          </Box>
        </Grid2>
    </Grid2>

    {selectedCategory && openDeleteModal && (
      <AlertItemDelete
        open={openDeleteModal}
        handleClose={handleCloseDeleteModal}
        title={selectedCategory?.Category}
      />
    )}

    {selectedCategory && openEditModal && (
      <AlertItemEdit
        open={openEditModal}
        handleClose={handleCloseEditModal}
        itemTitle={selectedCategory?.Category}
      />
    )}

    </>
  )
}

export default CategoriesData;