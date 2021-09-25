<template>
    <div class="top">
      <CommonHeader />
      <div class="main">
        <nuxt-link to="/register">
          <button>新規登録する
          </button>
        </nuxt-link>
        <nuxt-link to="/login">
          <button>ログインする
         </button>
        </nuxt-link>
      </div>  
    </div>
</template>

<script>

</script>
<style scoped>
 .top{
   width:100vh;
   position: absolute;
   background-color: black;
   height: 100vh;
 }
 .main{
   position:relative;
   margin:100px auto;
   text-align:center;
   background-color: white;
   width:50%;
   height:30%;
   border-radius: 5%;
 }
 button{
   margin-top:90px;
   width:40%;
   background-color: indigo;
   color:white;
   border-radius: 10%;
   padding:30px 20px;
 }
</style>
