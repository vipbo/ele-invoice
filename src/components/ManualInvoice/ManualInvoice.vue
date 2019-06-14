<template>
     <div class="wrap">
        <div class="head">
            <router-link to='/' > &lt; </router-link>
            <div>扫码开票</div>
            <div></div>
        </div>
        <div class="name">杭州鹿新咨询有限公司</div>
        <div>发票信息</div>
        <ul class="invoice-infos">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
        <div 
            class="extend" 
            @click='changeHeightFunction' 
            :style="{'height':changeHeight?'400px':'30px'}"
            >
           <div class="text"> 展开选填项目 v </div>
           <ul class="content">
               <li>aa</li>
               <li>bb</li>
               <li>cc</li>
               <li>dd</li>
           </ul>
        </div>
        <div>支付方式</div>
        <ul class="pay-type">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
        <div class="m-footer">
            <div class="detail">
                <div>
                    <span>总金额：</span>
                    <span>100987</span>
                </div>
                <div>
                    <mt-button type="primary" @click="IsShow = !IsShow">提交开票</mt-button>
                </div>
            </div>
        </div>
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
      changeHeight: false
    };
  },
  methods: {
    changeHeightFunction: function() {
      this.changeHeight = !this.changeHeight;
    }
  }
};
</script>
<style lang="less" scoped>
.wrap {
  position: relative;
  padding-bottom: 65px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
    }
  }
  .name {
    height: 30px;
    background: lightblue;
    text-align: center;
    line-height: 30px;
    color: white;
  }
  .invoice-infos {
    list-style: none;
    li {
      height: 30px;
      border-bottom: 1px solid #ccc;
    }
  }
  .extend {
    .text {
      color: #26a2ff;
    }
    .content {
      list-style: none;
    }
    line-height: 30px;
    overflow: hidden;
    text-align: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .pay-type {
    list-style: none;
    li {
      height: 30px;
      border-bottom: 1px solid #ccc;
    }
  }
  .m-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    border-top: 1px solid #ccc;
    .detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
  }
}
</style>
