<template>
  <div class="home">
    <Head/>
    <h1>总览条目</h1>
    <div v-for="item of message" class="message_item">
      <router-link :to="'/single/'+ item.id">
        <h3 v-changeStyle:ita="{font:'24px', }"> {{ item.id }} - {{ item.title | to-uppercase }}</h3>
      </router-link>
      <article> {{  item.body }} </article>
    </div>
    <div class="get_more">
      <el-button
        type="primary"
        @click="getMoreData"
        v-loading.fullscreen.lock="fullscreenLoading">
        加载更多...
      </el-button>
    </div>
  </div>
</template>

<script>
  import Head from './Head';
export default {
  components:{Head},
  data () {
    return {
      fullscreenLoading: false,
      message:[],
    }
  },
  created(){
    this.axios.get(this.$store.state.apiUrl).then((res)=>{
      // 请求成功并获取到数据
      // this.message = res.data.slice(0,this.num);
      //  开始请求加载数据
          this.$store.commit('storeMessageList',res.data);
          // 从本地取货数据
          if(this.$store.state.messageList !== null){
            this.message =  this.$store.state.messageList.slice(0,this.$store.state.num);
          }
    }).catch((err)=>{
      console.log('捕获到请求的错误信息',err);
    });
  },
  methods:{
    getMoreData() {
      //axios是异步的请求的
      this.$store.state.num += 2;
      if(this.$store.state.num <12){
        this.fullscreenLoading = true;
          // 本地区获取数据
          setTimeout(() => {
            this.message = this.$store.state.messageList.slice(0 ,this.$store.state.num);
            this.fullscreenLoading = false;
          }, 500);
      }else{
        this.$message.error('没有更多的数据了...');
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    height: 20rem;
  }
  h1{
    height: 80px;
    background: #ccc;
    text-align: center;
    line-height: 80px;
    font-size: 36px;
  }
  .message_item{
    margin-bottom: 10px;
    height: 100px;
    background: skyblue;
    border: 1px black solid;
    color: white;
    text-align: center;
  }
  .message_item a{
    text-decoration: none;
  }

  .message_item a:hover{
    cursor: pointer;
    color: gold;
  }
  .message_item h3{
      margin: 10px 0;
      font-size: 24px;
  }
  .message_item article{
    font-size: 18px;
    color: blue;
  }
  .get_more{
    text-align: center;
  }
</style>
