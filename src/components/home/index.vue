<script lang="ts" setup>
import sidebar from "./sidebar/index.vue";
import UserList from "./uesrList/index.vue";
import MessageBox from "./messageBox/index.vue";
</script>
<template>
  <div class="bg_content">
    <div class="bg"></div>
  </div>
  <div class="home_wrapper">
    <sidebar />
    <UserList />
    <MessageBox />
  </div>
</template>
<style lang="less" scoped>
.bg_content {
  width: 100vw;
  height: 100vh;
  z-index: -2;
  overflow: hidden;
  position: absolute;

  .bg {
    width: 100%;
    height: 100%;
    background: url(../../assets/images/bg.jpg);
    background-position: -10% -10%;
    transform: scale(1.2);
    filter: blur(20px);
  }
}
.home_wrapper {
  width: 65vw;
  height: 85vh;
  background: #f6f6f6;
  border-radius: 10px;
  position: relative;
  top: 7.5vh;
  left: 17.5vw;
  z-index: 1;
  opacity: 0.92;
  overflow: hidden;
}
</style>
