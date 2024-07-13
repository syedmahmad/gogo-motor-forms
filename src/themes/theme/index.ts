// project import
import Default from './default';

// types
import { PaletteThemeProps } from '../../../src/types/theme';
import { PalettesProps } from '@ant-design/colors';

// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

const Theme = (colors: PalettesProps): PaletteThemeProps => {
  return Default(colors);
};

export default Theme;
