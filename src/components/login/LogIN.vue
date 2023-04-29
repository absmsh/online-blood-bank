<template>
  <div>
    <br>
  </div>

  <!DOCTYPE html>
  <meta charset="UTF-8">
  <title>نموذج تسجيل الدخول</title>
  <div class="login-box">
    <h2>تسجيل الدخول</h2>
    <form @submit.prevent="handleSubmit">
      <div class="user-box">
        <input type="text" name="username" v-model="username" required="">
        <label>اسم المستخدم</label>
      </div>
      <div class="user-box">
        <input type="password" name="password" v-model="password" required="">
        <label>كلمة المرور</label>
      </div>
      <button type="submit">تسجيل الدخول</button>
    </form>
  </div>
</template>
<script>
export default {

  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
	},
  
	methods: {
	
    handleSubmit() {
      // Check if the entered credentials match the admin credentials
 if (this.username === 'Admin_Abbas' && this.password === 'adminofbloodbank') {
  // Update admin username in Vuex store
  this.$store.commit('setAdminUsername', this.username)
  // Redirect the user to the dashboard
  this.$router.push('/dashboard')
} else {
        // Display an error message to the user
alert("Incorrect username or password");      }
    },
  },

};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@600&display=swap");
header{
    width: 100%;
    height: 5rem;
    background-color: #3d008d;
    display: flex;
    justify-content: center;
    align-items: center;
}
header a{
    text-decoration: none;
    color: #f391e3;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
}
a:active,
a:hover,
a.router-link-active{
    border: 1px solid #f391e3;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Arial, sans-serif;
}

body {
	background-color: #f1f1f1;
}

.login-box {
	width: 320px;
	background-color: #fff;
	padding: 40px;
	margin: 100px auto;
	border-radius: 5px;
	box-shadow: 0px 0px 10px #000;
	direction: rtl;
}

.login-box h2 {
	font-size: 28px;
	font-weight: 600;
	text-align: center;
	margin-bottom: 30px;
}

.user-box {
	position: relative;
	margin-bottom: 20px;
}

.user-box input {
	width: 100%;
	padding: 10px 0;
	font-size: 16px;
	border: none;
	border-bottom: 1px solid #ccc;
	outline: none;
	background: transparent;
	direction: rtl;
}

.user-box label {
	position: absolute;
	top: 0;
	right: 0;
	font-size: 16px;
	color: #999;
	pointer-events: none;
	transition: 0.5s;
	direction: rtl;
}

.user-box input:focus ~ label,
.user-box input:valid ~ label {
	top: -20px;
	font-size: 12px;
	color: #111;
}

a {
	display: inline-block;
	background-color: #333;
	color: #fff;
	text-align: center;
	padding: 14px 0;
	border-radius: 5px;
	text-decoration: none;
	transition: 0.5s;
	direction: rtl;
}

a:hover {
	background-color: #fff;
	color: #333;
}

a span {
	position: absolute;
	display: block;
	background-color: #333;
	transition: 0.5s;
}

a span:nth-child(1) {
	top: 0;
	left: -100%;
	width: 100%;
	height: 2px;
}

a:hover span:nth-child(1) {
	left: 0;
}

a span:nth-child(2) {
	top: -100%;
	right: 0;
	width: 2px;
	height: 100%;
}

a:hover span:nth-child(2) {
	top: 0;
}

a span:nth-child(3) {
	bottom: 0;
	right: -100%;
	width: 100%;
	height: 2px;
}

a:hover span:nth-child(3) {
	right: 0;
}







header nav{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
header ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
li{
    margin: 0 0.5rem;
}
</style>