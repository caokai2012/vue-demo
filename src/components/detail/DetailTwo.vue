<template>
    <div class="two">
      <p
        style="text-align: center; margin: 0 0 20px;font-size: 20px;font-weight: bolder;color: #009f95"
      >用户每天的工作计划表</p>
      <div style="text-align: center">
        <el-transfer
          style="text-align: left; display: inline-block"
          v-model="value"
          filterable
          :right-default-checked="value"
          :render-content="renderFunc"
          :titles="['计划的任务', '已完成的任务']"
          :button-texts="['未完成', '已完成']"
          :format="{
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
          }"
          @change="handleChange"
          :data="data">
        </el-transfer>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          data:[],
          value: [],
          renderFunc(h, option) {
            return <span>{ option.key } - { option.label }</span>;
          }
        };
      },
      methods: {
        handleChange(value) {
          this.$store.commit('setWorkInfo',value);
          this.value = this.$store.state.workValue;
        },
      },
      created() {
        this.data = this.$store.state.workList;
        if(localStorage.getItem('todoList') !== null){
          this.value =  localStorage.getItem('todoList').split(',').map(Number);
        }
      }
    }
</script>

<style scoped>
  .two{
    float: left;
    width: 100%;
    margin: 10px auto;
  }
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>
