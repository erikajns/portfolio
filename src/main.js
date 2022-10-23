import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faLocationDot, faQuoteLeft, faCodeCommit} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faLocationDot, faLinkedinIn, faGithub, faQuoteLeft, faCodeCommit);

let app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')