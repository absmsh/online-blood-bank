<template>
    <base-card>
<SearchPatient/>
</base-card>

  <base-card>
   <h2>المرضى</h2>
   
   <br>
   <br>
  <div v-if="patients.length">
    <div v-for="patient in patients" :key="patient.id">
      <SinglePatient :patient="patient" @delete="handleDelete" />
    </div>
  </div>
</base-card>

<RouterView/>
</template>

<script>
import SearchPatient from "../search/SearchPatient.vue";
import BaseCard from "../dashboardComponnents/BaseCard.vue";
import SinglePatient from "../patients/SinglePatient.vue";
export default {
  
  components: { SinglePatient , BaseCard,SearchPatient},
  data() {
    return {
      patients: [],
      current: "all",
    };
  },
        

  mounted() {
    fetch("http://localhost:3000/patients")
      .then((res) => res.json())
      .then((data) => (this.patients = data))
      .catch((err) => console.log(err));
  },
  methods: {
    handleDelete(id) {
      this.patients = this.patients.filter((patient) => {
        return patient.id !== id;
      });
    },
  },
};
</script>
<style scoped>
header{
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