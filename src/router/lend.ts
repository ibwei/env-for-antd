const __DIR__ = 'lend'

const Current = {
  path: 'current',
  meta: {
    title: 'current'
  },
  name: 'current',
  component: () => import('../views/' + __DIR__ + '/current.tsx')
}

const history = {
  path: 'history',
  meta: {
    title: 'history'
  },
  name: 'history',
  component: () => import('../views/' + __DIR__ + '/history.tsx')
}

export default {
  path: '/' + __DIR__,
  redirect: '/' + __DIR__ + '/release',
  component: () => import('../views/' + __DIR__ + '/index.tsx'),
  children: [Current, history]
}
