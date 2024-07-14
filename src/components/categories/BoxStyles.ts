import { CSSProperties } from 'react';
import { Theme } from '@mui/material/styles';
 // column drag wrapper
 export const getWrapper = (
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

  // item drag wrapper
export const getInnerWrapper = (
    theme: Theme,
    radius: string
  ): CSSProperties | undefined => {
    return {
      userSelect: 'none',
      margin: `0 0 ${8}px 0`,
      padding: 16,
      border: '1px solid',
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.background.paper,
      borderRadius: radius,
    };
  };
