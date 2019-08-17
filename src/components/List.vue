<template>
    <div class="list">
      <Head/>
      <!-- tableData -->
      <div class="table_list">
        <!-- 表格与分页 -->
        <!--@click="handleEdit(scope.$index, scope.row)"-->
        <!--@click="handleDelete(scope.$index, scope.row)"-->
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            width="60">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="body"
            label="内容"
            height="400"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="small  "
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                size="small  "
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          style="text-align: center;margin-top:10px"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          layout="total, sizes, prev, pager, next, jumper"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="100"
          :total="total">
        >
        </el-pagination>
      </div>
    </div>
</template>

<script>
  import Head from './Head';
    export default {
        components:{Head},
        data(){
          return{
            url:'https://jsonplaceholder.typicode.com/posts',
            message:[],
            total:0,
            currentPage:1,
            pageSize:5,
          }
        },
      methods:{
        handleSizeChange(pageSize) {
          this.pageSize = pageSize;
        },
        handleCurrentChange(currentPage) {
          this.currentPage = currentPage;
        },
        handleEdit(index, row) {
          //  编辑弹出一个新的页面修改数据并赋值
          layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            shadeClose: true,
            skin: 'yourclass',
            content: '<ListEdit/>'
          });
          console.log(index, row);
        },
        handleDelete(index, row) {
          this.message.splice(index,1);
        }
      },
      computed:{
      //  分页功能的实现
        tableData(){
          return this.message.slice((this.currentPage-1) * this.pageSize, this.currentPage * this.pageSize);
        }
      },
      created() {
        // this.axios.get(this.url).then((res)=>{
        //   // 请求成功并获取到数据
        //   this.total = res.data.length;
        //    this.message = res.data;
        // });
      //  从本地获取数据
        this.message = JSON.parse(localStorage.getItem('list'));
        this.total = this.message.length;


      }

    }
</script>

<style scoped>

</style>
