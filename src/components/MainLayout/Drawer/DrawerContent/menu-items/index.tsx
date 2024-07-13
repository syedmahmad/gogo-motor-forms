// assets
import { DashboardOutlined, 
  UsergroupAddOutlined, 
  SnippetsOutlined,
  SlidersOutlined,
  FormOutlined
 } from '@ant-design/icons';

// types
import { NavItemType } from '@/types/menu';

// ==============================|| MENU ITEMS ||============================== //

// we only have 2 types of menu items.
// 1- simple items.
// 2- collapsable.
const menuItems: { items: NavItemType[] } = {
  items: [
    {
        id: 'dashboard',
        title: "dashboard",
        type: 'item',
        url: '/dashboard',
        icon: DashboardOutlined
      },
      {
        id: 'user-management',
        title: "user-management",
        type: 'item',
        url: '/user-management',
        icon: UsergroupAddOutlined,
      },
      {
        id: 'form-management',
        title: "form-management",
        type: 'collapse',
        url: '/form-management',
        icon: SnippetsOutlined,
        children: [
          {
            id: 'categories',
            title: "categories",
            type: 'item',
            url: '/categories',
            icon: SlidersOutlined
          },
          {
            id: 'forms',
            title: "forms",
            type: 'item',
            url: '/forms',
            icon: FormOutlined,
          },
        ]
      }
  ]
};

export default menuItems;
