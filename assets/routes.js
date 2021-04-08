/* Router */
import Landing from './views/landing.vue';

export default [
  {
    path: '/',
    component: Landing,
    children: [
      /* {
        path: '',
        name: 'Featured',
        component: Featured
      }, */
    ]
  }
]
