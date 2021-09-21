import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth"
import "firebase/compat/storage"
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'


import { onUnmounted, computed } from 'vue'



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOUq-8EOsX7Ol5meFx3YZIbie0twyMvpc",
    authDomain: "disneyplus-vue-clone.firebaseapp.com",
    projectId: "disneyplus-vue-clone",
    storageBucket: "disneyplus-vue-clone.appspot.com",
    messagingSenderId: "604383640888",
    appId: "1:604383640888:web:2865563a0a277b816615cd",
    measurementId: "G-1NX26PC1TN"
  });

//  const firebaseApp =  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()


export function useAuth(){
  const store = useStore();
  const router = useRouter()
  const user = computed(()=> store.state.user)
  const unsubscribe = auth.onAuthStateChanged(_user => store.commit("USER_LOGGEDIN", _user) )
  onUnmounted(unsubscribe)
  const isLogin = computed(() => user.value !== null)

  const signIn = async ()=>{
    const googleProvider = new  firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(googleProvider).then((result)=>{
      console.log(result)
      router.push({name:"Home"})
      
    }).catch((error)=>{
      alert(error.message)
    })
  }

  const signOut = async () => {
    await auth.signOut().then(()=>{
      store.commit("USER_LOGGED_OUT")
      router.push({name:"Login"})
      
    
  })}

  return {
    user , isLogin , signIn , signOut
  }
}

export function useFireStore(){
  const db = firebaseApp.firestore()

  return{ db}
}