<script lang="ts" setup>
import {reactive, ref} from 'vue'
let myId = ref<number>(12312313);
let Text = ref<string>('');
type message = {
   text:string,
   uid:number,
   userPicStore:string,
}
let messagePost = function(){
  let newMessage:message = {
       text:Text.value,
       uid:myId.value,
       userPicStore:'../../../assets/images/home/user_pic.jpg'
  }
  if(Text){
     messageData.push(newMessage);
     Text.value = '';
  }
}
let messageData = reactive<message[]>(
  [
    {
      text:'你好啊',
      uid:12312313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
    {
      text:'halo',
      uid:1231223313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
    {
      text:'heelop',
      uid:12312313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
    {
      text:'dfafaf',
      uid:123124324313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
    {
      text:'fadfafad',
      uid:1231342313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
    {
      text:'fadfafad',
      uid:1231342313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
    {
      text:'fadfafad',
      uid:1231342313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
    {
      text:'fadfafad',
      uid:1231342313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
    {
      text:'fadfafad',
      uid:12312313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
    {
      text:'上面的语法表示 active 是否存在取决于数据属性 isActive 的真假值。你可以在对象中写多个字段来操作多个 class。此外，:class 指令也可以和一般的 class attribute 共存。举例来说，下面这样的状态',
      uid:12312313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
    {
      text:'知道了',
      uid:123142342313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
    {
      text:'vue真是太好用了,语法糖真不错啊！！！！',
      uid:123142342313,
      userPicStore:'../../../assets/images/home/user_pic.jpg'
    },
  ]
)

</script>
<template>
  <div class="message_content">
    <div class="message_list">
      <div class="message_title">
        <div class="title">大帅比</div>
      </div>
      <div class="message_info_content">
        <div v-for="i in messageData" class="message_single_content">
          <div class="user_pic" :class="{'user_pic_right':myId == i.uid,'user_pic_left':myId != i.uid}">
            <img src="../../../assets/images/home/user_pic.jpg" />
          </div>
          <div class="message_text" :class="{'message_text_right':myId == i.uid,'message_text_left':myId != i.uid}">
              {{i.text}}
          </div>
        </div>
      </div>
    </div>
    <div class="message_text_input">
      <div class="smile">
        <img src="../../../assets/images/home/smile.png">
      </div>
      <div @click="messagePost" class="message_send_btn">发送</div>
      <textarea v-model="Text" autofocus cols="100" rows="10"></textarea>
    </div>
  </div>
</template>
<style lang="less" scoped>
.message_content {
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  .message_list {
    width: 100%;
    height: 70%;
    background: rgb(27 28 80 / 5%);
    .message_title {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid rgba(128, 128, 128, 0.25);
      position: relative;
      .title {
        position: absolute;
        bottom: 10px;
        left: 10px;
      }
    }
    .message_info_content {
        width: 100%;
        height: calc(100% - 60px);
        overflow-y: auto;
      .message_single_content {
        width: 100%;
        margin: 15px 0;
        position: relative;
        min-height: 43px;
        .user_pic {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          overflow: hidden;
          position: absolute;
          top: 0;
          img {
            width: 100%;
          }
        }
        .user_pic_left{
          left: 10px;
        }
        .user_pic_right{
          right:10px;
        }
        .message_text {
          width: 260px;
          border-radius: 5px;
          background: #ffffff;
          line-height: 20px;
          padding: 10px;
          word-wrap: break-word;
          font-size: 14px;
        }
        .message_text_left{
           margin-left: 60px;
        }
        .message_text_right{
          margin-left: 349px;
        }
      }
    }
  }
  .message_text_input{
    width: 100%;
    height: 30%;
    position: relative;
    bottom: 0;
    overflow: hidden;
    textarea{
      width: 95%;
      border: none;
      outline: none;
      padding: 10px;
      font-size: 16px;
      line-height: 20px;
      height: 70%;
      position: absolute;
      bottom: 0;
      background: #f6f6f6;
    }
    .message_send_btn{
       width: 66px;
       height: 30px;
       border-radius: 5px;
       background: #3d59d4fa;
       text-align: center;
       line-height: 30px;
       font-size: 10px;
       color: #fff;
       position: absolute;
       right: 30px;
       top: 13px;
    }
    .message_send_btn:hover{
      opacity: 0.9;
    }
    .smile{
      width: 20px;
      height: 20px;
      position: absolute;
      left: 10px;
      top: 13px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
