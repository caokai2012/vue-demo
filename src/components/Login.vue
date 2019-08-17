<template>
    <div class="login">
      <el-card class="box-card">
        <h2>用户登录</h2>
        <div  class="text item">
            <div class="login_inner">
              <div style="margin: 20px;"></div>
              <div class="demo-input-suffix">
                用户名：
                <el-input class="input_item"
                  placeholder="请输入用户名"
                  v-model.trim="username">
                  <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
                密码：
                <el-input class="input_item"
                  placeholder="请输入密码"
                  type="password"
                  v-model.trim="password">
                  <i slot="prefix" class=" el-input__icon el-icon-eleme"></i>
                </el-input>
                <div class="login-btn">
                  <el-button type="primary" @click="submitFn">登录</el-button>
                  <el-button type="warning" @click="resetFn">重置</el-button>
                </div>
              </div>
            </div>
        </div>
      </el-card>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            labelPosition: 'right',
            username:'',
            password:'',
          }
        },
      methods:{
          submitFn(){
            this.axios.post('api',{
              username:this.username,
              password:this.password
            }).then((res)=>{
              if(res.data.suc === 'succes' && res.status === 200){
              //  页面跳转
                this.$store.commit('storeSaveUserInfo',
                  { username:this.username, password:this.password,role:res.data.role});
                this.$router.push('/');
              }else{
                this.username = '';
                this.password = '';
                layer.msg('用户名或密码不正确...', {icon: 5});
              }
            }).catch((err)=>{
              console.log(err,'请求数据错误');
            });
          },
        resetFn(){
            this.username = '';
            this.password = '';
        }
      },
      created() {
          let userInfo = JSON.parse(localStorage.getItem('userInfo'));
          if(userInfo){
            this.username = userInfo.username;
            this.password = userInfo.password;
          }
      }

    }
</script>

<style scoped>
  .login{
    width: 50%;
    margin: 50px auto 0;
  }
  h2{
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
    color: skyblue;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
  .login-btn{
    margin-top: 30px;
    text-align: center;
  }
  .login-btn el-button{
    margin: 0 30px;
  }
  .input_item{
    margin:10px 0;
  }
</style>
