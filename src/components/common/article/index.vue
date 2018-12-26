<template>
  <el-card shadow="hover" class="article" :body-style="{ padding: '0px' }">
    <div>
      <div class="article-header">
        <a class="article-header-title">{{article.title}}</a>
        <div class="article-header-info">
          <div class="article-header-info_block">
            <i class="el-icon-date"></i>
            <p>发表于{{article.date}}</p>
          </div>
          <div class="article-header-info_block">
            <i class="el-icon-document"></i>
            <p>分类于{{article.type}}</p>
          </div>
        </div>
      </div>

      <div class="article-content">
        {{article.content}}
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'articleCard',
  props: {
    article: {
      type: Object,
      default:() => {
        return{
          title: 'Netty 解决消息被截断问题',
          date: '2018-12-23',
          type: 'Java',
          content: 'netty默认发送的长度为1024，超过这个长度的数据会被拆分成多个包发送，为了解决这个问题，netty提供了多个解码编码器供我们使用，这里使用LineBasedFrameDecoder。首先看server端增加的配置：'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article{
  width:10rem;
  padding:0 0.2rem 0.4rem;
  &-header{
    margin-bottom:0.3rem;
    &-title{
      color: #555;
      font-size:0.4rem;
      line-height: 0.4rem;
    }
    a:hover{
      color:#999;
    }
    &-info{
      color: #999;
      font-size:0.12rem;
      &_block{
        i{
          display:inline-block;
        }
        p{
          display:inline-block;
          margin:0;
        }
        display:inline-block;
      }
      div:first-child{
        margin-right:0.08rem;
        padding-right:0.08rem;
        border-right:#999 solid 0.01rem;
      }
    }
  }
  &-content{
    font-size: 0.14rem;
    color: #555;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
