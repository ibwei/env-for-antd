const serviceContext = require.context('./service', false, /\.js$/)

const services = {}

serviceContext.keys().forEach((service) => {
  const serviceModule = serviceContext(service).default

  const serviceName = service.replace(/(\.\/|\.js)/g, '')
  services[serviceName] = serviceModule
})

const Network = {
  install(Vue) {
    Vue.prototype.$Network = services
  }
}

export default Network
