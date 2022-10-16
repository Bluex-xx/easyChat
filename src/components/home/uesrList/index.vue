<script lang="ts" setup>
import {ref} from 'vue'
let search_info = ref<string>('');
</script>
<template>
<div class="user_list_content">
    <div class="title">Message</div>
    <div class="add">
        <img src="../../../assets/images/home/add_user.png">
    </div>
    <input v-model="search_info" type="text" placeholder="search">
    <div class="user_single" style="background:rgba(142, 196, 229, 0.283) ;">
        <div class="user_pic">
            <img src="../../../assets/images/home/user_pic.jpg">
        </div>
        <div class="user_name">
            大帅比
        </div>
    </div>
    <div v-for="i in 5" class="user_single">
        <div class="user_pic">
            <img src="../../../assets/images/home/user_pic.jpg">
        </div>
        <div class="user_name">
            大帅比
        </div>
    </div>
</div>
</template>
<style lang="less" scoped>
.user_list_content{
    width: 20%;
    background: #dddddd4d;
    opacity: 0.9;
    height: calc(100% - 60px);
    position: relative;
    left: 8%;
    padding: 30px 10px;
    overflow-x: auto;
    .title{
        width: 66px;
        height: 30px;
        line-height: 30px;
        border-bottom: 3px solid #223bba9c;
        color: rgba(0, 0, 0, 0.546);
        position: absolute;
        top: 10px;
        left: 15px;
        font-weight: 600;
    }
    .add{
        width: 20px;
        height: 20px;
        position: absolute;
        right: 30px;
        top: 20px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    input{
        width:83%;
        height: 28px;
        margin: 4% 1%;
        border-radius: 5px;
        border: none;
        outline:none;
        padding-left: 10px;
        margin-top: 30px;
    }
    .user_single{
        width: 180px;
        height: 50px;
        border-radius: 10px;
        margin-top: 8px;
        position: relative;
        .user_pic{
            width: 38px;
            height: 38px;
            border-radius: 10px;
            overflow: hidden;
            position: absolute;
            left: 10px;
            top: 6px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .user_name
        {
            width: 100px;
            line-height: 30px;
            position: absolute;
            right: 23px;
            top: 10px;
            overflow: hidden;
            color: grey;
            font-size: 16px;
        }
    }
    .user_single:hover,.user_single:first-child{
        background: rgba(142, 196, 229, 0.283);
    }
}
</style>