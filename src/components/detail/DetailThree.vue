<template>
    <div class="three">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          activeName: 'first'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>
  .three{
    float: left;
    width: 100%;
    height: 100%;
  }
  .el-tab-pane{
    height: 400px;
    color: gold;
    font-size: 20px;
    text-align: center;
    background: #009f95;
  }
</style>
