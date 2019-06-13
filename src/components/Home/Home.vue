<template>
    <div class="home">
       <div class="wrap">
          <manual-invoice class="one"/>
          <div>
            <router-link to='/scanInvoice' > 扫码开票</router-link>
          </div>
           <div>
                <router-link to='/checkInvoice' > 审核开票 </router-link>
           </div>
       </div>
    </div>
</template>
<script>
import ManualInvoice from "../ManualInvoice/ManualInvoice";
import ScanInvoice from "../ScanInvoice/ScanInvoice";
export default {
  components: {
    ManualInvoice,
    ScanInvoice
  }
};
</script>
<style scoped lang='less'>
.home {
  width: 100%;
  margin: 5% auto;
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 10vw;
      height: 10vw;
      border: 1px solid #cccccc;
      display: flex;
      justify-content: center;
      align-items: center;
      &.one {
        color: red;
      }
    }
  }
}
</style>
