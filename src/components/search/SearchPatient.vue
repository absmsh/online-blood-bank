<template>
  <button @click="showResults = true;">ابحث</button>

<input v-model="searchQuery" placeholder="ابحث عن طريق فصيلة الدم">
     
<table v-if="showResults">
  <thead>
    <tr>
      <th>فصيلة الدم</th>
        <th>العنوان</th>

      <th>رقم الهاتف</th>
    <th>الاسم الكامل</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="patient in filteredPatients" :key="patient.FullName">
      <td>{{ patient.bloodType }}</td>
            <td>{{ patient.address }}</td>

      <td>{{ patient.phoneNumber }}</td>
            <td>{{ patient.FullName }}</td>

    </tr>
  </tbody>
</table>

</template>

<script >

export default {
    data() {
        return {
            patients: [],
            searchQuery: "",
            showResults: false,
            current: "all",
        };
    },
    mounted() {
        fetch("http://localhost:3000/patients")
            .then((res) => res.json())
            .then((data) => (this.patients = data))
            .catch((err) => console.log(err));
    },

    computed: {
        filteredPatients() {
            if (this.searchQuery) {
                return this.patients.filter(patient => {
                    return patient.bloodType.toLowerCase().includes(this.searchQuery.toLowerCase())
                })
            }
            return []
        },
    },
}
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

th, td {
  text-align: center;
  padding: 8px;
}

th {
  background-color: #ddd;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Style for the search input and button */
input[type="text"] {
    height: 50px;

  font-family: Arial, sans-serif;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
  text-align: center;
  margin-right: 10px;
}

button {
    
  font-family: Arial, sans-serif;
  font-size: 11px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #4CAF50;
  color: #fff;
  cursor: pointer;
}

/* Style for the list of search results */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  font-family: Arial, sans-serif;
  font-size: 16px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: right;
  direction: rtl;
}

</style>