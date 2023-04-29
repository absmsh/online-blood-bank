<template>
    
  <div class="actions">
    <h3 @click="showDetails = !showDetails">اسم المريض:{{ patient.FullName }}</h3>

  </div>
  <div v-if="showDetails" class="details">
    <h4></h4>
    <p>{{ patient.phoneNumber }}</p>
        <p>{{ patient.Age }}</p>
            <p>{{ patient.email }} </p>
                <p>{{ patient.bloodType }}</p>

                <p>عنوان المريض:{{ patient.address }}</p>

                    <div class="icons">
      <button @click="deletepatient" class="material-icons">حذف</button>
      <router-link :to="{ name: 'EditPatient', params: { id: patient.id } }">
        <button class="material-icons"> تعديل</button>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  props: ["patient"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/patients/" + this.patient.id,
    };
  },
  methods: {
    deletepatient() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.patient.id))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.patient {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  direction: rtl; /* توجيه النص إلى اليمين */
  text-align: right; /* محاذاة النص إلى اليمين */
}

.actions h3 {
  margin: 0;
  font-size: 24px;
}

.details p {
  margin: 10px 0;
}

/* تعديل النص على حسب العرف العربي */


.details p:nth-of-type(1)::after {
  content: ":رقم الهاتف";
  display: inline;
}

.details p:nth-of-type(2)::after {
  content: ":العمر";
  display: inline;
}

.details p:nth-of-type(3)::after {
  content: ":البريد الإلكتروني";
  display: inline;
}

.details p:nth-of-type(4)::after {
  content: ":فصيلة الدم";
  display: inline;
}


button {
  /* يعيد ضبط الخصائص الافتراضية للأزرار */
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  background-color: #f2eaea;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
    margin-right: 10px;
}

/* يغير الشكل عند تمرير المؤشر على الزر */
button:hover {
  background-color: #ddd;
}

/* يغير الشكل عند النقر على الزر */
button:active {
  background-color: #ccc;
}


</style>