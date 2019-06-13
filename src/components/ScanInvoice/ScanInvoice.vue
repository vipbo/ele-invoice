<template>
    <div class="wrap">
        <div class="head">
            <div>扫码开票</div>
            <router-link to='/' > 返回Home</router-link>
        </div>
         <div>
            <mt-button type="primary" @click="IsShow = !IsShow">测试按钮</mt-button>
        </div>
        <div class="square" v-show="IsShow"/>
    </div>
</template>
<script>
import { Button } from "mint-ui";
export default {
  components: {
    MtButton: Button
  },
  data() {
    return {
      IsShow: false
    };
  }
};
</script>
<style lang="less" scoped>
.wrap {
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .square {
    width: 30vw;
    height: 30vw;
    margin: 5vw auto;
    border: 1px solid yellowgreen;
  }
}
</style>
