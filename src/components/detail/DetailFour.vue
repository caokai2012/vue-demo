<template>
    <div class="four">
      <el-row :gutter="20">
        <el-col :span="12"><div class="grid-content bg-purple">
          <div id="chart" class="chart"></div>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
          <div id="chart_t" class="chart"></div>
        </div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"><div class="grid-content bg-purple">
          <div id="chart_left" class="chart"></div>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
          <div id="chart_r" class="chart"></div>
        </div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      data(){
        return{

        }
      },
      mounted(){
        this.myChart = this.$echarts.init(document.getElementById("chart"));
        this.myChartLeft = this.$echarts.init(document.getElementById("chart_left"));
        this.myChartTop = this.$echarts.init(document.getElementById("chart_t"));
        this.myChartRight = this.$echarts.init(document.getElementById("chart_r"));
        this.drawChart();
      },
      methods:{
        drawChart(){
          let option = {
            title : {
              text: '上一周访问的人数',
              subtext: 'web0318科技有限公司',
              x: 'center',
              align: 'right'
            },
            xAxis: {
              type: 'category',
              data: this.$store.state.echartDataX,
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: this.$store.state.echartSeriesData,
              type: 'bar'
            }]
          };
          // 绘制第二个图形的
          let optionRight = {
            title : {
              text: '上一周访问的人数',
              subtext: 'web0318科技有限公司',
              x: 'center',
              align: 'right'
            },
            xAxis: {
              type: 'category',
              data: this.$store.state.echartDataX,
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: this.$store.state.echartSeriesData,
              type: 'line'
            }]
          };

          this.myChart.setOption(option);
          this.myChartLeft.setOption(option);
          this.myChartTop.setOption(optionRight);
          this.myChartRight.setOption(optionRight);
          window.onresize = function(){
            this.myChart.resize()
          }

        }
      }
    }
</script>

<style scoped>
.four{
  width: 100%;
  height: 550px;
  margin-left: 3px;
  /*background: #009f95;*/
}
  /* 布局 */
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
  /*  图标*/
  .chart{
    height: 250px;
    width: 100%;
    margin: 0 auto;
  }
</style>
