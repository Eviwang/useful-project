import Vue from 'vue'
import App from './app.vue'
import Tabs from './components/tabs/index.js'

Vue.use(Tabs)

var root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render (h) {
    return h(App)
  }
}
).$mount(root)
