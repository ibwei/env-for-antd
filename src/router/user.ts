const __DIR__ = 'user'

const Login = {
  path: 'login',
  meta: {
    title: 'login'
  },
  name: 'login',
  component: () => import('../views/' + __DIR__ + '/Login.vue')
}

const Register = {
  path: 'register',
  meta: {
    title: 'register'
  },
  redirect: '/' + __DIR__ + '/Register.vue',
  component: () => import('../views/' + __DIR__ + '/Register.vue')
}

export default {
  path: '/' + __DIR__,
  redirect: '/' + __DIR__ + '/login',
  component: () => import(/* webpackChunkName: "btc" */ '../views/' + __DIR__ + '/index.vue'),
  children: [Login, Register]
}
