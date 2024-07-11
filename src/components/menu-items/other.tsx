// assets
import { ChromeOutlined, QuestionOutlined, DeploymentUnitOutlined } from '@ant-design/icons';

// type
import { NavItemType } from '../../types/menu';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other: NavItemType = {
  id: 'dashboard',
  title: "dashboard",
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: "dashboard",
      type: 'item',
      url: '/dashboard',
      icon: icons.ChromeOutlined
    },
    {
      id: 'user-management',
      title: "user-management",
      type: 'item',
      url: '/user-management',
      icon: icons.QuestionOutlined,
    },
    {
      id: 'form-management',
      title: "form-management",
      type: 'collapse',
      url: '/form-management',
      icon: icons.DeploymentUnitOutlined,
      children: [
        {
          id: 'dashboard',
          title: "dashboard",
          type: 'item',
          url: '/dashboard',
          icon: icons.ChromeOutlined
        },
        {
          id: 'user-management',
          title: "user-management",
          type: 'item',
          url: 'user-management',
          icon: icons.QuestionOutlined,
        },
        {
          id: 'form-management',
          title: "form-management",
          type: 'item',
          url: 'form-management',
          icon: icons.DeploymentUnitOutlined,
        }
      ]
    }
  ]
};

export default other;
