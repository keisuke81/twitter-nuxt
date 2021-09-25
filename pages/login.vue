<template>
  <div class="login">
    <CommonHeader/>
    <div class="login_form">
      <h1>ログイン</h1>
        <div >
          <input type="email" v-model="email" placeholder="メールアドレス" class=login_input required />
        </div>
        <div>  
          <input type="password" v-model="パスワード" placeholder="password" class="login_input" required />
        </div>
        <Nuxt-link to="/home">  
          <button @click="login" class="login_btn">ログイン</button>
        </Nuxt-link>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data(){
    return{
      email: null,
      password: null,
    }
  },
  methods:{
    login(){
      if(!this.email || !this.password){
      alert('メールアドレスまたはパスワードが入力されていません。')
      return
      }

      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(()=>{
        alert('ログインが完了しました')
        this.$router.push('/home')
      })

      .catch((error)=>{
        switch(error.code){
          case 'auth/invalid-email':
            alert('メールアドレスの形式が違います。')
            break
          case 'auth/user-disabled':
            alert('ユーザーが無効になっています')
            break
          case 'auth/user-not-found':
            alert('ユーザーが存在しません')
            break
          case 'auth/wrong-password':
            alert('パスワードが間違っております')
            break
          default:
            alert('エラーが起きました。しばらくしてから再度お試しください')
            break
        }
      })
    },
  },
}
</script>
<style scoped>
.login {
  background-color:black;
  height: 100vh;
}
.login_form {
   padding:20px 0;
   margin:100px auto;
   text-align:center;
   background-color: white;
   width:50%;
   height:30%;
   border-radius: 5%;
}
.login_input {
   margin:5px auto;
   width:50%;
}
.login_btn {
  margin:20px 0;
   width:30%;
   background-color: indigo;
   color:white;
   border-radius: 40%;
   padding:5px 20px;
}
</style>