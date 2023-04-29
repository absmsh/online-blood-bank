<template>
    <donor/>

    <footer>
      <div class="left"> <span>{{ $store.state.adminUsername }}</span></div>
      <div class="right"><button @click="handleLogout">Logout</button></div>
    </footer>
</template>

<script>
import donor from '@/components/DonoR.vue'


export default {
  components: {
    donor,
  },



  methods: {
    handleLogout() {
      // Clear admin username from Vuex store and redirect to login page
      this.$store.commit('setAdminUsername', '')
      this.$router.push("/")
    },
  },


}
</script>

<style scoped>
footer {
  height: 20px;
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.left {
  display: flex;
  align-items: center;
}

.left span {
  margin-left: 5px;
  font-weight: bold;
    color: #00ce89;

}

.right {
  display: flex;
  justify-content: flex-end;
}


.right button {
  background-color: #d01010;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 4px 2px;
  cursor: pointer;
}

button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}



.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 20px;
}
a.router-link-active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
</style>