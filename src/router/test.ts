const __DIR__ = 'test'

export default {
  path: '/' + __DIR__,
  component: () => import(/* webpackChunkName: "test" */ '../views/test')
}
