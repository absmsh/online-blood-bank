import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import LogIn from '../components/login/LogIN.vue'
import DashBoard from '../views/DashBoard.vue'
import AddDonor from '@/components/dashboardComponnents/donors/AddDonor.vue'
import DonoR from '@/components/DonoR.vue'
import EditDonor from '@/components/dashboardComponnents/donors/EditDonor.vue'
import AddPatient from '@/components/patients/AddPatient.vue'
import PatieNt from '@/components/patients/PatieNt.vue'
import EditPatient from '@/components/patients/EditPatient.vue'
import AbOut from "@/components/AbOut.vue"
import ContactUS from '@/components/ContactUs.vue'
import StaFf from '@/staff/StaFf.vue'
import AddStaf from '@/staff/AddStaf.vue'
import EditStaf from '@/staff/EditStaf.vue'
// import store from '@/store'

// const requireAuth = (to, from, next) => {
//   if (store.getters.isAuthenticated) {
//     // User is authenticated, allow access to the route
//     next()
//   } else {
//     // User is not authenticated, redirect to login page
//     next({ path: '/login' })
//   }
// }


const routes = [
  {
     path: '/',
    name: 'HelloWorld',
    component:HelloWorld
  },
  {
     path: '/About',
    name: 'About',
    component:AbOut
  },
  {
       path: '/addstaff',
    name: 'addstaff',
    component:AddStaf
  },
    {
       path: '/Editstaff',
    name: 'Editstaff',
    component:EditStaf
  },

 {
     path: '/Contact',
    name: 'Contact',
    component:ContactUS
  },
   {
     path: '/staff',
    name: 'staff',
    component:StaFf
  },



  {
    path: '/login',
    name: 'login',
    component:LogIn
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
      // beforeEnter: requireAuth,
    children: [
      { path: '/donor', component: DonoR},
       { path: '/adddonor', component: AddDonor},
      { path: '/patient', component: PatieNt },
      { path: '/addpatient', component: AddPatient, },
      { path: '/staff', component: StaFf, },
     
      {path: '/addstaff', component: AddStaf}

    ]
  },
  {
    path: '/patient',
    name: 'patient',
    component: PatieNt
  },
  {
    path: '/addpatient',
    name: 'addpatient',
    component: AddPatient
  },


  {
    path: '/donor',
    name: 'donor',
    component: DonoR
  },
  {
    path: '/adddonor',
    name: 'adddonor',
    component: AddDonor
  },
  {
    path: '/projects/:id',
    name: 'EditDonor',
    component: EditDonor,
    props: true
  },
  {
    path: '/projects/:id',
    name: 'EditPatient',
    component: EditPatient,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
