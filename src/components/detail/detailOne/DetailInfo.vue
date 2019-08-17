<template>
    <div class="detail_info">
      <div class="block">
        <el-avatar :size="150" :src="circleUrl"/>
      </div>
      <div class="user_info">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2> 用户信息 </h2>
          </div>
            <div v-for="(item,index) of userList" :key="item.id" class="text item">
              <h3>{{ item.title}}:</h3>
              <el-divider/>
              <span>{{ item.desc}}</span>
              <el-divider/>
          </div>
        </el-card>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            username:'',
            circleUrl: require('./../../../assets/images/user.jpeg'),
            userList: [
              {id:1,title:'用户名','desc':'超级管理员'},
              {id:2,title:'兴趣爱好','desc':'上天揽月，下海捞鱼'},
              {id:3,title:'权限管理','desc':'超级权限'},
            ],
          }
        },
      computed:{
        getUser(){
          return JSON.parse(localStorage.getItem('userInfo')).username;
        }
      }
    }
</script>

<style scoped>
  .detail_info{
    float: left;
    width: 300px;
    height: 350px;
    background: skyblue;
  }
  .block{
    width: 150px;
    height: 150px;
    margin: 10px auto;
  }
  .box-card{
    text-align: center;
  }
  .box-card h2{
    font-size: 20px;
    font-weight: bolder;
    color: seagreen;
  }
  .el-divider--horizontal{
    margin: 12px 0px;
  }
</style>
