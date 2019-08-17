import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home';
//路由的懒加载：
const Home = ()=> import('@/components/Home');
const Detail = ()=> import('@/components/detail/Detail');
const List = ()=> import('@/components/List');
const Single = ()=> import('@/components/Single');
const Login = ()=> import('@/components/Login');
const DetailOne = ()=> import('@/components/detail/detailOne/DetailOne');
const DetailTwo = ()=> import('@/components/detail/detailTwo');
const DetailThree = ()=> import('@/components/detail/detailThree');
const DetailFour = ()=> import('@/components/detail/DetailFour');
const DetailMap = ()=> import('@/components/detail/DetailMap');

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      children:[
        {path:'/',component: DetailMap},
        {path:'detailone',component:DetailOne},
        {path:'detailtwo',component:DetailTwo},
        {path:'detailthree',component:DetailThree},
        {path:'detailfour',component:DetailFour},
        {path:'detailmap',component:DetailMap},
      ],
      //  独享守卫一般使用在禁止查看某一个私密的页面的时候使用
        beforeEnter:(to,from,next)=>{
            if(JSON.parse(localStorage.getItem('userInfo')).role == '1'){
                next();
            }else{
              layer.alert('您还没有权限查看！', {icon: 6});
            }
          }
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
