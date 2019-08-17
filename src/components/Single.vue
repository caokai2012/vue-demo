<template>
  <div class="one_page">
    <Head/>
    <div class="single">
        <el-col :span="20" :offset="2">
          <el-card :body-style="{ padding: '0px' }">
            <div class="banner">
              <!--  @someSwiperEvent="callback" -->
              <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="banner of banners">
                  <img :src="banner.imgUrl" alt="" class="image" :key="banner.id">
                </swiper-slide>
                <div class="pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
            </div>
            <div style="padding: 14px;">
              <span>{{ message.id }} - {{ message.title | to-uppercase}}</span>
              <div class="bottom clearfix">
                <p class="time">{{ message.body }}</p>
              </div>
            </div>
          </el-card>
        </el-col>
    </div>
  </div>
</template>

<script>
    import Head from "./Head";
    export default {
        name: "Single",
      components: {Head},
      data(){
          return {
            id:this.$route.params.id,
            url:'https://jsonplaceholder.typicode.com/posts',
            message:{},
            banners:[
              {id:1,imgUrl:require('./../assets/images/banner1.jpg')},
              {id:2,imgUrl:require('./../assets/images/banner2.jpg')},
              {id:3,imgUrl:require('./../assets/images/banner3.jpg')},
              {id:4,imgUrl:require('./../assets/images/banner4.jpg')},
            ],
            swiperOption: {
              loop: true, // 循环模式选项
              autoplay : 1000,
              speed:600,
              pagination : '.pagination',
              paginationClickable :true,
              createPagination :true,
              //  较低的版本使用的 方法
              nextButton: '.swiper-button-next',
              prevButton: '.swiper-button-prev',
            },
          }
      },
      created() {
          this.axios.get(this.url+'/'+this.id).then((res)=>{
            if(res.status === 200){
              this.message = res.data;
            }
          }).catch((err)=>{
            console.log(err,'请求错误！');
          });
      },
    }
</script>

<style scoped>
  .single{
    width: 80%;
    margin: 40px auto;
    text-align: center;
  }
  .time {
    font-size: 16px;
    line-height: 20px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .image {
    width: 100%;
    height: 400px;
    margin: 0 auto;
  }
  .clearfix:after {
    clear: both
  }
</style>
