import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'
//import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faLocationDot, faQuoteLeft, faCodeCommit, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faLocationDot, faLinkedinIn, faGithub, faQuoteLeft, faCodeCommit,faEnvelope);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjCXb9fOKdWjDCmVLp8Izmw_Jkbi6CbQg",
    authDomain: "portfolio-8b043.firebaseapp.com",
    projectId: "portfolio-8b043",
    storageBucket: "portfolio-8b043.appspot.com",
    messagingSenderId: "1078074673661",
    appId: "1:1078074673661:web:a8027e07ddc03a0c0a7194"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(firebase);
app.mount('#app')
