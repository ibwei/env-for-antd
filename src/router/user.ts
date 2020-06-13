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
  name: 'register',
  component: () => import('../views/' + __DIR__ + '/Register.vue')
}

const Password = {
  path: 'password',
  meta: {
    title: 'password'
  },
  name: 'password',
  component: () => import('../views/' + __DIR__ + '/Password.vue')
}

export default {
  path: '/' + __DIR__,
  redirect: '/' + __DIR__ + '/login',
  component: () => import(/* webpackChunkName: "btc" */ '../views/' + __DIR__ + '/index.vue'),
  children: [Login, Register, Password]
}
