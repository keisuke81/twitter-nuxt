<template>
    <div class="register">
      <CommonHeader />
        <div class="input_area">
          <h1>新規登録</h1>
          <div class="input_main">
            <div>
              <input type="text" v-model="name" placeholder="ユーザーネーム" class="input" required />
            </div>    
            <div>
              <input type="email" v-model="email" placeholder="メールアドレス" class="input" required />
            </div>
            <div>
              <input type="password" v-model="password" placeholder="パスワード" class="input" required />
            </div>
            <nuxt-link to="/login">
              <button @click="register" >新規登録</button>
            </nuxt-link>
          </div>  
        </div>  
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data(){
    return {
      name: null,
      email: null,
      password: null,
    }
  },
  methods: {
    register() {
      if(!this.email || !this.password){
        alert('メールアドレス、パスワードのいずれかが入力されていません。')
        return
      }
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((data)=> {
        data.user.sendEmailVerification().then(() =>{
          this.$router.replace('/login')
        })
      })

      .catch((error) =>{
        switch(error.code){
          case 'auth/invalid-email':
            alert('メールアドレスの形式が違います。')
            break
          case 'auth/weak-password':
            alert('パスワードは6文字以上で入力してください。')
            break
        }
      })
    },
  },
}
</script>
<style scoped>
 .register{
   width:100vh;
   position: absolute;
   background-color: black;
   height: 100vh;
 }
 .input_area {
   position: relative;
   padding:20px 0;
   margin:100px auto;
   text-align:center;
   background-color: white;
   width:50%;
   height:30%;
   border-radius: 5%;
 }
 h1{
   color:black;
 }
 button{
   margin:20px 0;
   width:30%;
   background-color: indigo;
   color:white;
   border-radius: 40%;
   padding:5px 20px;
 }
 .input{
   margin:5px 0;
   width:50%;
 }
</style>