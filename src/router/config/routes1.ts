export const routeConfig: RouteOptions[] = [
  {
    path: '/',
    name: 'index',
    title: '首页',
    component: '/homePage',
    isHidden: true
  },
  {
    path: 'A',
    name: 'A',
    title: 'A',
    icon: 'Edit',
    type: 'menu',
    component: '/A',
    children: [
      {
        path: 'A-a',
        name: 'A-a',
        title: 'A-a',
        icon: 'Edit',
        component: '/A/A-a'
      },
      {
        path: 'A-b',
        name: 'A-b',
        title: 'A-b',
        icon: 'Edit',
        component: '/A/A-b'
      }
    ]
  },
  {
    path: 'B ',
    name: 'B',
    title: 'B',
    icon: 'Edit',
    type: 'menu',
    component: '/B',
    children: [
      {
        path: 'B1',
        name: 'B1',
        title: 'B1',
        icon: 'Edit',
        component: '/B/B1',
        type: 'menu',
        children: [
          {
            path: 'B11',
            name: 'B11',
            title: 'B11',
            icon: 'Edit',
            component: '/B/B1/B1'
          }
        ]
      }
    ]
  },
  {
    path: 'C',
    name: 'C',
    title: 'C',
    icon: 'Edit',
    component: '/C'
  },
  {
    path: 'D',
    name: 'D',
    title: 'D',
    icon: 'Edit',
    component: '/D'
  }
]
