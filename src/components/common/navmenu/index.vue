<template>
  <div class="menu">
    <section class="blog-info">
      <a>Techone's Blog</a>
      <p>热爱生活 憧憬未来</p>
    </section>
    <el-card class="menu-card nav">
      <div>
        <el-menu
          default-active="2"
          @open="handleOpen"
          @close="handleClose"
          background-color="#fff"
          text-color="#555"
          active-text-color="#000">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">标签</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">关于</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-card>

    <el-card class="menu-card user">
      <img src="../img/avatar.png" class="user-avatar" />
      <div class="user-info">
        <p>Techone</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.menu{
  width:2.5rem;
}

.blog-info{
  background:#222;
  color:#fff;
  width:100%;
  height:1.5rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a{
    font-size:0.2rem;
  }
  p{
    font-size: 0.13rem;
    color: #ddd;
  }
}

.menu-card{
  width:100%;
  // position:fixed;
  // top:0.2rem;
}

.nav{
  margin-bottom:0.15rem;
}

.user{
  &-avatar{
    width:1.8rem;
    height:1.8rem;
  }
  &-info{
    font-size:0.24rem;
    color:#000;
  }
}
</style>
