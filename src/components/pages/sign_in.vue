<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>登录</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click.native="next">操作按钮</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
</template>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    display: inline-block;
  }
</style>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
  next:function(){
    this.$router.push({path:'/home'})
  }
    
  }
};
</script>