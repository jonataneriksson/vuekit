/* Router */

import Landing from './views/landing.vue';
import Cover from './views/cover.vue';
import Default from './views/default.vue';

export default [
  {
    path: '/',
    component: Landing,
    children: [
      {
        name: 'Cover',
        path: '',
        component: Cover
      }
    ]
  },
]
