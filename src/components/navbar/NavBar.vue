<template>

<header>
  <nav>
    <ul >

      <li><router-link to="/">الصفحة الرئيسية</router-link></li>
      <li v-if="loggedIn"><router-link to="/login">تسجيل دخول</router-link></li>
      <li v-if="!loggedIn"><router-link to="/dashboard">لوحة التحكم</router-link></li>
      <li><router-link to="/Contact">تواصل معنا</router-link></li>
      <li><router-link to="/About">حول</router-link></li>
      <li>
        <router-link to="/">
          <!-- add image element with logo source -->
          <img class="logo" src="@/assets/logo.png" alt="logo">
        </router-link>
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.adminUsername !== '';
    }
  }
}
</script>


<style scoped>


.nav{
  color: #bab9b9;
}


header {
  background-color: #f0f0f0;
  height: 80px;
  display: flex;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  direction: rtl; /* set direction to right-to-left for Arabic */
  text-align: right; /* align text to the right */
}


nav ul {
    align-items: center;

  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin-right: 20px;
}

nav li:last-child {
  margin-right: 0;
}

nav a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
}

nav a:hover {
  background-color: #ffffff;
}
.logo{
  height: 40px;
  margin-right: 720px;
}
</style>