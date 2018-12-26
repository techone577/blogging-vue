<template>
  <!-- <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="300px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container> -->
  <div class="body">
    <section class="header"></section>
    <div class="main">
      <section class="nav">
        <nav-menu></nav-menu>
      </section>
      <section class="article">
        <div v-for="(article,index) in articles" :key="index">
          <article-card :article="article"></article-card>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import navHeader from '@/components/common/header'
import navMenu from '@/components/common/navmenu'
import articleCard from '@/components/common/article'
export default {
  data(){
    return{
      articles: [{
        title: 'Netty 解决消息被截断问题',
        date: '2018-12-23',
        type: 'Java',
        content: 'netty默认发送的长度为1024，超过这个长度的数据会被拆分成多个包发送，为了解决这个问题，netty提供了多个解码编码器供我们使用，这里使用LineBasedFrameDecoder。首先看server端增加的配置：'
      },{
        title: 'Netty 解决消息被截断问题',
        date: '2018-12-23',
        type: 'Java',
        content: 'netty默认发送的长度为1024，超过这个长度的数据会被拆分成多个包发送，为了解决这个问题，netty提供了多个解码编码器供我们使用，这里使用LineBasedFrameDecoder。首先看server端增加的配置：'
      },{
        title: 'Netty 解决消息被截断问题',
        date: '2018-12-23',
        type: 'Java',
        content: 'netty默认发送的长度为1024，超过这个长度的数据会被拆分成多个包发送，为了解决这个问题，netty提供了多个解码编码器供我们使用，这里使用LineBasedFrameDecoder。首先看server端增加的配置：'
      },{
        title: 'Netty 解决消息被截断问题',
        date: '2018-12-23',
        type: 'Java',
        content: 'netty默认发送的长度为1024，超过这个长度的数据会被拆分成多个包发送，为了解决这个问题，netty提供了多个解码编码器供我们使用，这里使用LineBasedFrameDecoder。首先看server端增加的配置：'
      },{
        title: 'Netty 解决消息被截断问题',
        date: '2018-12-23',
        type: 'Java',
        content: 'netty默认发送的长度为1024，超过这个长度的数据会被拆分成多个包发送，为了解决这个问题，netty提供了多个解码编码器供我们使用，这里使用LineBasedFrameDecoder。首先看server端增加的配置：'
      },{
        title: 'Netty 解决消息被截断问题',
        date: '2018-12-23',
        type: 'Java',
        content: 'netty默认发送的长度为1024，超过这个长度的数据会被拆分成多个包发送，为了解决这个问题，netty提供了多个解码编码器供我们使用，这里使用LineBasedFrameDecoder。首先看server端增加的配置：'
      },{
        title: 'Netty 解决消息被截断问题',
        date: '2018-12-23',
        type: 'Java',
        content: 'netty默认发送的长度为1024，超过这个长度的数据会被拆分成多个包发送，为了解决这个问题，netty提供了多个解码编码器供我们使用，这里使用LineBasedFrameDecoder。首先看server端增加的配置：'
      },{
        title: 'Netty 解决消息被截断问题',
        date: '2018-12-23',
        type: 'Java',
        content: 'netty默认发送的长度为1024，超过这个长度的数据会被拆分成多个包发送，为了解决这个问题，netty提供了多个解码编码器供我们使用，这里使用LineBasedFrameDecoder。首先看server端增加的配置：'
      }]
    }
  },
  components: {navHeader, navMenu, articleCard},
  created () {

  },
}
</script>

<style lang="less" scoped>
  .body{
    // padding: 0 2rem;
  }

  .header{
    width:100%;
    position:absolute;
    top:0;
    left:0;
    height:0.05rem;
    background:#222;
  }

  .main{
    margin:-0.03rem auto;
    max-width:14rem;
    .nav{
    // position:fixed;
    // top:0;
    // left:2rem;
    float:left;
    margin-right:0.2rem;
    // display:inline-block;
    }
    .article{
      // display:inline-block;
      float:left;
      margin-bottom: 0.15rem;
      // div:not(:last-child){
      //   margin-bottom: 0.15rem;
      // }
    }
  }
</style>
