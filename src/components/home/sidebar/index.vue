<script lang="ts" setup>

</script>
<template>
<div class="sidebar_content">
    <div class="three_dot">
        <div class="item" v-for="i in 3"></div>
    </div>
   <div class="user_pic">
      <img src="../../../assets/images/home/user_pic.jpg">
   </div>
   <div class="btn_list">
       <div class="btn_single"><img src="../../../assets/images/home/Messages.png"></div>
       <div class="btn_single"><img src="../../../assets/images/home/user.png"></div>
       <div class="btn_single"><img src="../../../assets/images/home/setting.png"></div>
   </div>
</div>
</template>
<style lang="less" scoped>
.sidebar_content{
    width: 8%;
    height: 100%;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    .three_dot{
        width: 100%;
        position: absolute;
        top: .8vw;
        display: flex;
        height: 10px;
        left: .5vw;
        .item{
            width: 13px;
            height: 13px;
            border-radius: 50%;
            background: #e96b60;
            margin-left: 7px;
        }
        .item:nth-child(2){
            background-color: #f2c056;
        }
        .item:nth-child(3){
            background-color: #61c559;
        }
    }
    .user_pic
    {
        position: absolute;
        width: 3vw;
        height: 3vw;
        border-radius: 50% ;
        overflow: hidden;
        left: calc((100% - 3vw)/2);
        top: 3.8vw;
        img{
            width: 100%;
            height: 100%;
            
        }
    }
    .btn_list
    {
        width: 100%;
        position: absolute;
        left: 0;
        top: 8vw;
        display: flex;
        flex-direction: column;
        .btn_single{
            width: 50px;
            height: 50px;
            margin: 6px 15px;
            border-radius: 15px;
            transition: all .2s;
            img{
                width: 30px;
                height: 30px;
                margin: 10px;
            }
        }
        .btn_single:hover,.btn_single:first-child{
            background-color: rgb(128 128 128 / 9%);
            transition: all .2s;
        }
    }
}
</style>