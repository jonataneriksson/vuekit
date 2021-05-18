/* Router */
const Landing = () => import(/* webpackChunkName: "Vues" */ './views/landing.vue')

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
