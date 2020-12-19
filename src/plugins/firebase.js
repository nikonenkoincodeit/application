import firebase from 'firebase'
import auth from 'firebase/auth' // eslint-disable-line no-unused-vars
import config from './env.json'

export const fireApp = firebase.initializeApp(config)

export const AUTH = fireApp.auth()

export default ({ Vue }) => {
  Vue.prototype.$auth = AUTH
}
