<template>
  <div class="one">
    <DetailInfo/>
    <div class="calendar">
      <el-calendar v-model="value" style="height: 400px!important;"></el-calendar>
    </div>
  </div>
</template>

<script>
  import DetailInfo from './DetailInfo';
    export default {
      components:{DetailInfo},
      data(){
        return {
          value: new Date()
        }
      }
    }
</script>

<style scoped>
.one{
  float: left;
  height: 300px;
}
  .calendar{
    width: 600px;
    height: 400px;
    float: left;
    margin: 0px 50px 0;
  }
 .el-calendar-table .el-calendar-day{
  height: 50px !important;
}
</style>
