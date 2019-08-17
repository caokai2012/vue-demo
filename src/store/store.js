import Vue   from 'vue';
import Vuex from  'vuex';

Vue.use(Vuex);

// 创建store数据仓库
let store =  new Vuex.Store({
  state:{
     messageList:[],
     url:'https://jsonplaceholder.typicode.com/posts',
     num: 5,
     apiUrl:'./../../static/api/homeList.json',
     userInfo:{},
     workList:[
       { key: 1, label: '检查邮件'},
       { key: 2, label: '安排员工任务'},
       { key: 3, label: '验收工作计划'},
       { key: 4, label: '清除错误信息'},
       { key: 5, label: '汇报总结工作'},
     ],
    workValue:[],
    echartDataX:['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
    echartSeriesData:[1200, 2000, 1500, 800, 700, 1100, 1030],
  },
  mutations:{
    // 相当于 methods 方法事件的触发：
    storeMessageList(state,list){
        // 保存到数据的持久化
      localStorage.setItem('list',JSON.stringify(list)); //序列化
      state.messageList =  JSON.parse(localStorage.getItem('list')); //反序列化
    },
    storeSaveUserInfo(state,userInfo){
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      state.userInfo = JSON.parse(JSON.stringify(userInfo)) ;
    },
    setWorkInfo(state,workList){
      localStorage.setItem('todoList',workList.join(','));
      state.workValue = workList;
    }
  },
  getters:{
    //看成组件下的computed的计算属性 也是具有缓存的特性

  },
  actions:{

  },
});

export default store;

