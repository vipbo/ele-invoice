<template>
    <div >
        <div class="title">
            <h3>审核开票</h3>
            <router-link to='/' > 返回Home</router-link>
        </div>
      
        <div>
            <mt-index-list>
                <mt-index-section index="A">
                    <mt-cell title="Aaron"></mt-cell>
                    <mt-cell title="Alden"></mt-cell>
                    <mt-cell title="Austin"></mt-cell>
                </mt-index-section>
                <mt-index-section index="B">
                    <mt-cell title="Baldwin"></mt-cell>
                    <mt-cell title="Braden"></mt-cell>
                </mt-index-section>
                 <mt-index-section index="C">
                    <mt-cell title="Caldwin"></mt-cell>
                    <mt-cell title="Craden"></mt-cell>
                </mt-index-section>
                 <mt-index-section index="D">
                    <mt-cell title="Daldwin"></mt-cell>
                    <mt-cell title="Draden"></mt-cell>
                    <mt-cell title="Draden1"></mt-cell>
                    <mt-cell title="Draden2"></mt-cell>
                    <mt-cell title="Draden3"></mt-cell>
                </mt-index-section>
                <mt-index-section index="Z">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
            </mt-index-list>
        </div>
    </div>
</template>
<script>
import { IndexList, IndexSection, Cell } from "mint-ui";
export default {
  components: {
    MtIndexList: IndexList,
    MtIndexSection: IndexSection,
    MtCell: Cell
  }
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
