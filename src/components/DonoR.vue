<template>
  <header>
  <nav>    
    <ul>
    <!-- <li><router-link to="/donor">donors</router-link> </li> -->
    <li><router-link to='/AddDonor'>اضافة متبرع</router-link></li>
    <li><router-link to="/patient">المرضى</router-link></li>
    <li><router-link to="/AddPatient">اضافة مريض</router-link></li>
        <li><router-link to="/staff">الموظفين </router-link></li>
        <li><router-link to="/addstaff">اضافة موظف</router-link></li>

  </ul>
    </nav> 
  </header>
  <base-card><DIV> <SeaRch></SeaRch></DIV></base-card>
  

  <base-card>
    
  <h2>المتبرعين</h2>
 
  <br>
  <div v-if="donors.length">
    <div v-for="donor in donors" :key="donor.id">
      <SingleDonor :donor="donor" @delete="handleDelete" />
    </div>
  </div>
</base-card>

<RouterView/>
</template>

<script>
import SeaRch from "./search/SeaRch.vue";
import BaseCard from "../components/dashboardComponnents/BaseCard.vue";
import SingleDonor from "./SingleDonor.vue";
export default {
  
  components: { SingleDonor , BaseCard,SeaRch},
  data() {
    return {
      donors: [],
      current: "all",
    };
  },
  
        

  mounted() {
    fetch("http://localhost:3000/donors")
      .then((res) => res.json())
      .then((data) => (this.donors = data))
      .catch((err) => console.log(err));
  },
  methods: {
    handleDelete(id) {
      this.donors = this.donors.filter((donor) => {
        return donor.id !== id;
      });
    },
  },
};
</script>
<style scoped>
header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  background-color: #f5f5f5;
}

</style>