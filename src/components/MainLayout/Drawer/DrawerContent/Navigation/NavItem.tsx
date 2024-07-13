import { forwardRef, useEffect, ForwardRefExoticComponent, RefAttributes } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { ListItemButton, ListItemIcon, 
  ListItemText, Typography, useMediaQuery } from '@mui/material';

// project import
import useConfig from '../../../../../hooks/useConfig';
import { dispatch, useSelector } from '../../../../../store';
import { activeItem, openDrawer } from '../../../../../store/reducers/menu';

// types
import { LinkTarget, NavItemType } from '../../../../../types/menu';
import { ThemeMode } from '../../../../../types/config';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

interface Props {
  item: NavItemType;
  level: number;
}

const NavItem = ({ item, level }: Props) => {
  const theme = useTheme();

  const menu = useSelector((state) => state.menu);
  const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));
  const { drawerOpen, openItem } = menu;

  const { menuOrientation } = useConfig();
  let itemTarget: LinkTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps: {
    component: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> | string;
    href?: string;
    target?: LinkTarget;
  // eslint-disable-next-line react/display-name
  } = { component: forwardRef((props, ref) => <Link {...props} href={item.url!} target={itemTarget} ref={ref} />) };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const Icon = item.icon!;
  const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;

  const isSelected = openItem.findIndex((id: any) => id === item.id) > -1;

  const pathname = usePathname();

  // active menu item on page load
  useEffect(() => {
    if (pathname === item.url) {
      dispatch(activeItem({ openItem: [item.id] }));
    }
    // eslint-disable-next-line
  }, [pathname]);

  const textColor = theme.palette.mode === ThemeMode.DARK ? 'grey.400' : 'text.primary';
  const iconSelectedColor = theme.palette.mode === ThemeMode.DARK && drawerOpen ? 'text.primary' : 'primary.main';

  return (
    <>
      <ListItemButton
          {...listItemProps}
          disabled={item.disabled}
          selected={isSelected}
          sx={{
            zIndex: 1201,
            pl: drawerOpen ? `${level * 28}px` : 1.5,
            py: !drawerOpen && level === 1 ? 1.25 : 1,
            ...(drawerOpen && {
              '&:hover': {
                bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter'
              },
              '&.Mui-selected': {
                bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter',
                borderRight: `2px solid ${theme.palette.primary.main}`,
                color: iconSelectedColor,
                '&:hover': {
                  color: iconSelectedColor,
                  bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter'
                }
              }
            }),
            ...(!drawerOpen && {
              '&:hover': {
                bgcolor: 'transparent'
              },
              '&.Mui-selected': {
                '&:hover': {
                  bgcolor: 'transparent'
                },
                bgcolor: 'transparent'
              }
            })
          }}
          {...(matchDownLg && {
            onClick: () => dispatch(openDrawer(false))
          })}
        >
          {itemIcon && (
            <ListItemIcon
              sx={{
                minWidth: 28,
                color: isSelected ? iconSelectedColor : textColor,
                ...(!drawerOpen && {
                  borderRadius: 1.5,
                  width: 36,
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter'
                  }
                }),
                ...(!drawerOpen &&
                  isSelected && {
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.900' : 'primary.lighter',
                    '&:hover': {
                      bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.darker' : 'primary.lighter'
                    }
                  })
              }}
            >
              {itemIcon}
            </ListItemIcon>
          )}
          {drawerOpen && (
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
                  {item.title}
                </Typography>
              }
            />
          )}
        </ListItemButton>
    </>
  );
};

export default NavItem;
