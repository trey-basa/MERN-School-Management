export default {
  items: [
    {
      name: 'Dashboard',
      url: '/base/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'School Data',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Data Management',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'View Data',
          url: '/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'New Data',
          url: '/base/forms',
          icon: 'icon-cursor',
        }
      ],
    },
    {
      name: 'School Management',
      url: '/base/tooltips',
      icon: 'icon-pie-chart',
    }
  ],
};
