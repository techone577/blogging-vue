<template>
  <el-row class="bg--black navigator">
    <el-col :span="6"><p class="font--white navigator-font">Techone's Blog</p></el-col>
    <el-col :span="3"><p class="font--white navigator-font">首页</p></el-col>
    <el-col :span="3"><p class="font--white navigator-font">关于</p></el-col>
    <el-col :span="3"><p class="font--white navigator-font">分类</p></el-col>
    <el-col :span="3"><p class="font--white navigator-font">标签</p></el-col>
    <el-col :span="3"><p class="font--white navigator-font">归档</p></el-col>
    <el-col :span="3"><i class="el-icon-search"></i></el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.bg--black{
  background: #222;
}
.font--white{
  color:#fff;
}
.navigator{
  height:0.5rem;
}
.navigator-font{
  font-size:0.2rem;
}
</style>
