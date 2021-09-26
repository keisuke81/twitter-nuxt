<template>
  <div class="home">
    <div class="sidebar">
    <div>
      <img src="../img/logo.png" alt="" class="sidebar_logo">
    </div>
    <div class="sidebar_home">
      <Nuxt-link to="/Home">
        <img src="../img/home.png" alt="">
        <p>ホーム</p>
      </Nuxt-link>
      </div>  
    <div class="sidebar_logout">
      <Nuxt-link to="/login">
        <img src="../img/logout.png" alt="">
        <p>ログアウト</p>
      </Nuxt-link>
    </div>
      <div class="sidebar_share">
        <label>シェア
          <textarea type="text" v-model="tweetContent" class="tweet_input" rows="6" ></textarea>
        </label>  
        <button  @click="addTweet()" class="share_btn">シェアする</button>
      </div>
    </div>    
    <div class="timeline">
      <ul>
        <li>ホーム</li>
        <li>
          <p>test</p>
          <img src="../img/heart.png" alt="">
          <p>0</p>
          <img src="../img/cross.png" alt="">
          <img src="../img/detail.png" alt="">
          <div>
            <p>tweet</p>
          </div>
        </li>
        <li class="tweetlist" v-for="tweetList in tweetLists" :key="tweet_id">
          <p>{{name}}</p>
          <img src="../img/heart.png" alt="">
          <p>{{countLike}}</p>
          <img src="../img/cross.png" alt="" @click="deleteTweet">
          <img src="../img/detail.png" alt="">
          <div>
            <p>{{tweetContent}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      name: "",
      tweetContent: "",
    };
  },
  methods:{
    async gettweetContent(){
      const tweetData = await this.$axios.get(
        "http://127.0.0.1:8000/api/tweet/"
      );
      this.tweetLists = tweetData.data.data;
    },
    async addTweet(){
      const sendData = {
        name: this.name,
        tweetContent: this.tweetContent
      };
      await this.$axios.post("http://127.0.0.1:8000/api/tweet", sendData);
      this.gettweetContent();
    },
    async deleteTweet(id){
      await this.$axios.delete("http://127.0.0.1:8000/api/tweet" + id);
      this.gettweetContent
    },
  },
  created(){
    this.gettweetContent();
  },
};
</script>
<style scoped>.sidebar {
  background-color: black;
  color:white;
  width:20vh;
  height:50vh;
  margin: 0 0;
  padding:20px 20px
}
.sidebar_logo {
  width:40%;
  height:auto;
}
.sidebar_home {
  margin:5px 0;
  width:100%;
}
.sidebar_home img {
  width:10%;
}
.sidebar_logout {
  margin:10px 0;
}
.sidebar_logout img {
  width:10%;
}
p {
  display: inline;
  color:white;
}
.sidebar_share textarea {
  width:100%;
  background-color: transparent;
  color:white;
  border-radius: 5px;
}
.share_btn {
  display: block;
  margin:0 0 0 auto;
  background-color: blueviolet;
  color: white;
  border-radius: 5px;
}
li img {
  width:3%;
}
p{
  display:inline;
}
.home {
  display: -webkit-flex;
  display: flex;
}
.timeline {
  background-color: black;
  width:70%;
  color: white;
}
ul {
  list-style: none;
}
li {
  margin-top: 0;
  padding:5px 5px;
  border:solid 1px white;
}
</style>