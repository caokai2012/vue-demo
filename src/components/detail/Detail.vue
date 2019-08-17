<template>
    <div class="detail">
      <Head/>
      <!-- 侧边的导航 -->
      <div class="detail_left">
        <Sidebar/>
      </div>
      <div class="detail_right">
        <router-view/>
      </div>
    </div>
</template>

<script>
  import Head from '../Head';
  import Sidebar from './Sidebar';
  import DetailOne from './detailOne/DetailInfo';
    export default {
        components:{Head,Sidebar,DetailOne},
        name: "Detail"
    }
</script>

<style scoped>
.detail_left{
  float: left;
  width: 14%;
}
  .detail_right{
    float: left;
    width: 85%;
    height: 400px;
    margin:5px 0 0 10px;
  }
</style>
