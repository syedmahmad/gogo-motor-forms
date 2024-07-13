// material-ui
import { useTheme } from '@mui/material/styles';
import { Link } from '@mui/material';
// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Image from "next/image";
import logo3 from '@/assets/images/logo3.png';
import logo4 from '@/assets/images/logo4.png';

// types
import { MenuOrientation } from '../../../../types/config';

// ==============================|| DRAWER HEADER ||============================== //

interface Props {
  open: boolean;
}

const DrawerHeader = ({ open }: Props) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled
      theme={theme}
      open={open}
      sx={{
        minHeight: '60px',
        width: 'inherit',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: 0,
      }}
    >
      <Link href="/">
        {!open ? <Image
                  src={logo4}
                  alt="logo"
                /> : <Image
                  src={logo3}
                  alt="logo"
                  width={200}
                  height={35}
                />}
      </Link>
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
