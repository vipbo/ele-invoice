import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import ScanInvoice from '@/components/ScanInvoice/ScanInvoice'
import CheckInvoice from '@/components/CheckInvoice/CheckInvoice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/scanInvoice',
      name: 'scanInvoice',
      component: ScanInvoice
    },
    {
      path: '/checkInvoice',
      name: 'checkInvoice',
      component: CheckInvoice
    },


  ]
})
