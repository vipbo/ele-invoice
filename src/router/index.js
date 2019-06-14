import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import ManualInvoice from '@/components/ManualInvoice/ManualInvoice'
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
      path: '/manualInvoice',
      name: 'ManualInvoice',
      component: ManualInvoice
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
