<template>
  <header>
    <img src="../img/logo.png" alt=""> 
    <nav class="nav">
      <ul class="menu-group">
        <li class="menu-item">
          <NuxtLink to="/register">新規登録</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="/login">ログイン</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$auth.logout();
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  height: 50px;
  padding: 0 20px;
  background-color: black;
  align-items: center;
}
header img {
  width: 150px;
  margin: 0px auto 0px 0;
}
.menu-item {
  margin: 0 0 0 auto;
  list-style: none;
  display: inline-block;
  padding: 10px;
}
.menu-item a {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
</style>

