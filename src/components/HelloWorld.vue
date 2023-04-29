<template>
  <div class="hometext"> 
    <h1>مرحبا بكم في بنك الدم</h1>

    <h3>المتبرعين بالدم ينقذون حياة الملايين من الناس 
    </h3>
  </div>
<div>

  <h2>     : يمكنك تسجيل معلوماتك ادناه والتواصل معنا لتوفير فصيلة الدم التي تحتاجها
</h2>

<div >
  <AddPatient/>
</div>
</div>


</template>

<script>
import AddPatient from './patients/AddPatient.vue';
export default {
  components: {  AddPatient},
  
      mounted() {
        fetch("http://localhost:3000/donors")
            .then((res) => res.json())
            .then((data) => (this.donors = data))
            .catch((err) => console.log(err));
    },


}
</script>

<style>
h1{
  color: rgb(0, 0, 0);
}
h2{
  color: rgb(0, 0, 0);
}
h3{
  color: rgb(0, 0, 0);
}

</style>