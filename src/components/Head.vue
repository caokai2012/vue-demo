<template>
    <header>
        <nav>
            <router-link to="/">
              首页
            </router-link>
            <router-link to="/detail">
             详情
            </router-link>
            <router-link to="/list">
             列表
            </router-link>
          <div class="login_info">
            <strong >{{ welcome }} </strong>
            <el-button size="mini" type="warning" @click="logout">注销</el-button>
          </div>
        </nav>
    </header>
</template>

<script>
    export default {
        data(){
          return {
            welcome:''
          }
        },
      methods:{
        logout(){
          // 清空本地储存的
          this.welcome = '请您先登录' ;
          setTimeout(()=>{
            localStorage.removeItem('userInfo');
            localStorage.removeItem('list');
            this.$router.push('/login');
          },3000);
        }
      },
      created() {
        this.welcome = `欢迎
        ${JSON.parse(localStorage.getItem('userInfo')).username}
        用户，进入IT的世界` ;
      }
    }
</script>

<style scoped>
  .login_info{
    float: right;
    width: 300px;
    height: 50px;
    margin-right: 10px;
    color: seagreen;
  }
  header{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: skyblue;
  }
  nav{
    margin-left: 300px;
  }
  a{
    margin: 0rem 0.4rem;
    padding: 0.4rem;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 1px #ccc solid;
    border-radius: 0.8rem;
    background: #409EFF;
    color: white;
  }
  a:hover{
    color: burlywood;
    background: olivedrab;
    border: 1px gold solid;
  }
  .router-link-active{
    color: blue;
    background: greenyellow;
  }
</style>
