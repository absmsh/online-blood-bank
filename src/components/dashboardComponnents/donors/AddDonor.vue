<!-- json-server --watch src/data/db.json -->

<template>
<!--   
  <header>
  <nav>    
    <ul>
    <li><router-link to="/donor">donors</router-link> </li>
    <li><router-link to='/AddDonor'>Add Donor</router-link></li>
    <li><router-link to="/patient">patients</router-link></li>
    <li><router-link to="/AddPatient">Add patient</router-link></li>
  </ul>
    </nav> 
  </header> -->
  <base-card>

   <div class="register-box">
		<h2>اضافة متبرع </h2>
  <form @submit.prevent="handleSubmit">
			<div class="user-box">
          <br>
				<input type="text" name="name"  v-model="FullName" required="">
   
				<label>اسم المتبرع</label>

			</div>
      <div class="user-box">
          <br>
				<input type="number" name="age"  v-model="Age" required="">
   
				<label>العمر</label>

			</div>
			<div class="user-box">
         <br>
				<input type="tel" name="phone"  v-model="phoneNumber" required="">
       
				<label>رقم الهاتف</label>
			</div>
			<div class="user-box">
         <br>
				<input type="email" name="email" v-model="email" required="">
        
				<label>البريد الإلكتروني</label>
			</div>
			<div class="user-box">
				<select name="address" v-model="address" required="">
					<option value="">اختر العنوان</option>
					<option value="الكرخ">الكرخ</option>
					<option value="الرصافة">الرصافة</option>
				</select>
        <br>
	
			</div>
			<div class="user-box">
				<select name="blood-type" v-model="bloodType" required="">
					<option value="">اختر فصيلة الدم</option>
					<option value="A+">A+</option>
					<option value="A-">A-</option>
					<option value="B+">B+</option>
					<option value="B-">B-</option>
					<option value="AB+">AB+</option>
					<option value="AB-">AB-</option>
					<option value="O+">O+</option>
					<option value="O-">O-</option>
				</select>
        <br>
		
			</div>
			<button>اضافة</button>
		</form>
	</div>
</base-card>
</template>

<script>
import BaseCard from '../BaseCard.vue';
export default {
  components:{BaseCard},
  data() {
    return {
      FullName: "",
      phoneNumber: "",
      Age: "",
      email: "",
      bloodType: "",
      address:""
      
      
      
      
    };
  },
  methods: {
    handleSubmit() {
      let donor = {
        FullName: this.FullName,
        phoneNumber: this.phoneNumber,
        Age: this.Age,
          email: this.email,
        address: this.address,
        bloodType: this.bloodType,
        id: Math.floor(Math.random() * 100),
      };
      console.log(donor);

      fetch("http://localhost:3000/donors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donor),
      })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((err) => console.log(err));
    },
  },
    
};
</script>

<style scoped>

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Arial, sans-serif;
}

body {
	background-color: #f1f1f1;
}

.register-box {
	width: 500px;
	background-color: #fff;
	padding: 40px;
	margin: 100px auto;
	border-radius: 5px;
	box-shadow: 0px 0px 10px #000;
	direction: rtl;
}

.register-box h2 {
	font-size: 28px;
	font-weight: 600;
	text-align: center;
	margin-bottom: 30px;
}

.user-box {
	position: relative;
	margin-bottom: 20px;
}

.user-box input,
.user-box select {
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
	font-size: 16
}
header{
  top: 20px;
  left: 0px;
    width: 120px;
    height: 100%;
    background-color: #7c18ae;
    display: flex;
    justify-content: center;
    align-items: center;
}
header a{
    text-decoration: none;
    color: #000000;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
}
a:active,
a:hover,
a.router-link-active{
    border: 1px solid #ffffff;
}
h1 {
    margin: 0;
}
h1 a{
    color: white;
    margin: 0;
}
h1 a:hover,
h1 a:active,
h1 a.router-link-active{
    border-color: transparent;
}
header nav{
  top: 20px;
  left: 0px;
    width: 100%;
    height: 100%;
    margin: auto;
    display: list-item;
    justify-content: space-between;

}
header ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: list-item;
    justify-content: center;
    
}
li{
    margin: 0 0.5rem;
}
</style>