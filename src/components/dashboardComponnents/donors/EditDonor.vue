<template>
<base-card>
  <div>
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
    <button>تعديل</button>
		
			</div>
		</form>
    </div>
</base-card>
</template>

<script>
import BaseCard from '../BaseCard.vue';
// update the drug and save the new data to db.json
//   - create a submit handler and prevent default action
//   - use the fetch api to send a PATCH request to update
//   - redirect to the homepage route once done
export default {
  components:{BaseCard},
  props: ["id"],
  data() {
    return {
      uri: "http://localhost:3000/donors/" + this.id,
      FullName: "",
      phoneNumber: "",
      Age: "",
      email: "",
      bloodType: "",
      address: "",

    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.FullName= data.FullName;
        this.phoneNumber= data.phoneNumber;
        this.Age= data.Age;
        this.email = data.email;
        this.bloodType= data.bloodType,
        this.address= data.address;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ FullName: this.FullName, phoneNumber: this.phoneNumber,Age:this.Age,email:this.email,address:this.address,bloodType:this.bloodType }),
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

@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>