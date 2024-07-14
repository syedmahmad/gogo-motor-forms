"use client"
import { CSSProperties, useState } from 'react';
import { Typography, Box, Grid, Stack } from "@mui/material";
import { useTheme, Theme } from '@mui/material/styles';
import AddItem from '@/components/categories/AddItem';
import Items from '@/components/categories/Items';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const QuestionTypes = ({ questionType, questionValues, questionScore, handleShowSubQuestions }: any) => {
  const theme = useTheme();
  // column drag wrapper
  const getDragWrapper = (
    theme: Theme,
    radius: string
  ): CSSProperties | undefined => {
    // const bgcolor = theme.palette.mode === ThemeMode.DARK ? theme.palette.background.default : theme.palette.primary.lighter;
    return {
      minWidth: 250,
      border: '1px solid',
      borderColor: theme.palette.divider,
      borderRadius: radius,
      userSelect: 'none',
      margin: `0 ${16}px 0 0`,
      height: '100%',
      paddingBottom: '20px',
      backgroundColor: theme.palette.divider,
      padding: 8,
      maxHeight: 'calc(100vh - 150px)',
      overflow: 'auto'
    };
  };
  
  return(
    <Grid2
      container
      sx={{ display: 'flex', width: '100%', overflowX: 'auto' }}
    >
      <Grid2 xs={12}>
        <Box
          style={getDragWrapper(theme, `4px`)}
        >
          <Typography variant="subtitle1" textTransform="capitalize">
            Question Type
          </Typography>
          <Typography
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
              {questionType}
            </Typography>
          {questionValues.map((item: any, index: number) => (
            <Box key={index}>
              <br />
              <Items handleShowNextComponent={handleShowSubQuestions} item={item} index={1} />
            </Box>
          ))}
          <Typography
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
              {questionScore}
            </Typography>
          </Box>
        </Grid2>
    </Grid2>
  )
}

export default QuestionTypes;