import Layout from '../layout'

import {
  Error404,
  Home,
  SignIn,
  SignUp
} from '../views'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
      }
    ]
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404
  }
]

export default routes
