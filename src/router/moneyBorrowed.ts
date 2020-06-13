const __DIR__ = 'moneyBorrowed'

export default {
  path: '/' + __DIR__ + '/release',
  component: () => import('../views/' + __DIR__ + '/release')
}
