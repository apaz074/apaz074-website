import DefaultLayout from '~/layouts/Default.vue'

import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'
import 'prismjs/themes/prism-tomorrow.css'

import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  faCheck,
  faFileCode,
  faPhoneAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faNodeJs,
  faSass,
  faWordpress,
  faNpm,
  faVuejs,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faNodeJs,
  faSass,
  faWordpress,
  faNpm,
  faCheck,
  faVuejs,
  faWhatsapp,
  faFileCode,
  faPhoneAlt,
  faEnvelope
)

export default function (Vue, {
  head,
}) {
  Vue.use(VueScrollTo)
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)

  Vue.component('font-awesome', FontAwesomeIcon)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700,800,800i'
  })
}