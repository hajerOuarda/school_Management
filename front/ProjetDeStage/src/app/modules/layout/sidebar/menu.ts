import {MenuItem} from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Basics',
    isTitle: true
  },
  {
    label: 'Subject',
    icon: 'message-square',
    link: '/subject',
  },
  {
    label: 'Class',
    icon: 'home',
    link: '/class',
    badge: {
      variant: 'primary',
      text: 'New',
    }
  },
  {
    label: 'Users',
    isTitle: true
  },
  {
    label: 'Students',
    icon: 'feather',
    link: '/students',
  },
  {
    label: 'Teacher',
    icon: 'anchor',
    link: '/professor',
  },
];
