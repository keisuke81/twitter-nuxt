<template>
    <div class="register">
      <CommonHeader />
        <div class="input_area">
          <h1>新規登録</h1>
          <div class="input_main">
            <div>
              <input type="text" v-model="newName" placeholder="ユーザーネーム" class="input" required />
            </div>    
            <div>
              <input type="email" v-model="newEmail" placeholder="メールアドレス" class="input" required />
            </div>
            <div>
              <input type="password" v-model="newPassword" placeholder="パスワード" class="input" required />
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
      newName: "",
      newEmail: "",
      newPassword: "",
    }
  },
  methods: {
    async getUserLists() {
      const userData = await this.$axios.get(
        "http://127.0.0.1:8000/api/user"
      );
      this.userLists = userData.data.data;
    },
    async register(){
      const sendData = {
        name: this.newName,
        email: this.newEmail,
        password: this.newPassword,
      };
      await this.$axios.post("http://127.0.0.1:8000/api/user", sendData);
      this.getUserLists();
    },
    async deleteUserLists(id){
      await this.$axios.delete("http://127.0.0.1:8000/api/user" + id);
      this.getUserLists;
    },
  },
  created(){
    this.getUserLists();
  },
};
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