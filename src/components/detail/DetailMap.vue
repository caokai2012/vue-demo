<template>
  <div class="detailMap">
      <div class="map" id="container"></div>
  </div>
</template>

<script>
  import {MP} from './../../../static/map';
    export default {
      data(){
        return {
          ak:'kWYGIebThrdZKBTbrI7c0w40YbHWu3N1',
        }
      },
      mounted(){
        this.$nextTick(()=>{
          var _this = this;
          MP(_this.ak).then(BMap => {
            var map = new BMap.Map("container"); // 创建地图实例
            var point = new BMap.Point(104.05 ,30.65); // 创建点坐标
            map.centerAndZoom(point, 15);   // 初始化地图，设置中心点坐标和地图级别
          });
        });
      },
    }
</script>

<style scoped>
  .map{
    height:500px;
    width: 100%;
    margin-left: 2px;
  }
</style>
