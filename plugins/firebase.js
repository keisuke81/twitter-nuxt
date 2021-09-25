import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyAyrgm39P0_n0fCVIOCkn7gJRSb3lrXZgU",
      authDomain: "twitter-pj-e0a1d.firebaseapp.com",
      projectId: "twitter-pj-e0a1d",
      storageBucket: "twitter-pj-e0a1d.appspot.com",
      messagingSenderId: "559517742676",
      appId: "1:559517742676:web:85d58b298f3b073de2dfc1",
      measurementId: "G-694H6FH47R"
    }
  )
}
export default firebase