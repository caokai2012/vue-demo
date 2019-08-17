<template>
    <div class="sidebar">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 0px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">导航一</span>
          </template>
            <router-link to="/detail/detailone">
              <el-menu-item index="1-1">
                用户信息
              </el-menu-item>
            </router-link>
            <router-link to="/detail/detailtwo">
              <el-menu-item index="1-2">工作计划</el-menu-item>
            </router-link>

            <router-link to="/detail/detailthree">
              <el-menu-item index="1-3">系统配置 </el-menu-item>
            </router-link>
            <router-link to="/detail/detailfour">
              <el-menu-item index="1-4">统计信息 </el-menu-item>
            </router-link>
          <router-link to="/detail/detailmap">
            <el-menu-item index="1-5">地图</el-menu-item>
          </router-link>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          isCollapse: false
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
.sidebar{
  float: left;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
a{
  text-decoration: none;
}
</style>
