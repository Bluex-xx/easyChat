<template>
  <div class="login_content">
    <div class="logo">
      <img src="../../assets/images/logo.png" />
    </div>
    <div class="login_box">
      <div class="login_box_title">账号登录</div>
      <div class="input_box">
        <input
          placeholder="account"
          type="text"
          autofocus
          v-model="user_info.account"
        />
        <input
          placeholder="password"
          type="password"
          v-model="user_info.password"
          id="password"
        />
        <div class="password_icon">
          <img
            @click="changePasswordVisiblity"
            src="../../assets/images/login/eye_icon.png"
          />
        </div>
      </div>
      <div class="select_box">
        <input type="checkbox" v-model="saveState" />
        <div class="login_box_storageTip">Remeber userInfo？</div>
        <RouterLink to="/register"><div class="login_box_register">register</div></RouterLink>
      </div>
      <div @click="loginPost(user_info)" class="login_btn">登录</div>
    </div>
    <div class="copyright">
      Copyright by <a href="https://github.com/Bluex-xx/easyApi">easyApi</a> @
      2022
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, reactive, ref } from "vue";
//用户登录信息提交
type userInfo = {
  account: string;
  password: string;
};
//有可能有bug考虑使用 ？？,确认localStorage获取不到是null还是undefined
let user_info = reactive<userInfo>({
  account: localStorage.getItem("account") || "",
  password: localStorage.getItem("password") || "",
});
let saveState = ref<boolean>(false);
const router = useRouter();
let loginPost = function (user_info: userInfo): void {
  //发送登录请求
  alert("登录成功");
  //路由跳转

  router.push('/home');

  //存储账号信息
  if (saveState.value && user_info.account && user_info.password) {
    localStorage.setItem("account", user_info.account);
    localStorage.setItem("password", user_info.password);
  }
};
//密码切换显示状态
let passwordType: HTMLElement | any;
let icon: HTMLElement | any;
let eyeIconSrc: string = "/src/assets/images/login/eye_icon.png";
let closeEyeIconSrc: string = "/src/assets/images/login/eye_close_icon.png";
let changePasswordVisiblity = function (): void {
  let judge: boolean = passwordType.type == "password";
  passwordType.type = judge ? "text" : "password";
  icon.src = judge ? closeEyeIconSrc : eyeIconSrc;
};
onMounted(() => {
  passwordType = document.getElementById("password");
  icon = document.querySelector(".password_icon img");
});
</script>

<style lang="less" scoped>
@backgroundColor: #f6f6f6;

.trasition {
  transition: all 0.3s;
}

.login_content {
  width: 100vw;
  height: 100vh;
  background: @backgroundColor;
  position: relative;

  .logo {
    width: 13vw;
    position: absolute;
    left: calc((100% - 13vw) / 2);
    top: 15vh;
    .trasition();

    img {
      width: 100%;
      cursor: none;
      pointer-events: none;
    }
  }

  .logo:hover {
    .trasition();
    filter: drop-shadow(0 0 2em #257bd9);
  }

  .login_box {
    width: 32vw;
    height: 45vh;
    background: #ffffff;
    border-radius: 10px;
    border: 1px solid rgba(128, 128, 128, 0.329);
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
    position: relative;
    left: calc((100% - 32vw) / 2);
    top: 28vh;

    &_title {
      color: rgb(92, 88, 88);
      font-size: 1.5rem;
      font-weight: 600;
      margin-left: calc((100% - 6rem) / 2);
      margin-top: 7%;
    }

    .select_box {
      margin-top: 2vh;
      height: 2vw;
      position: relative;
    }

    &_storageTip,
    &_register {
      color: grey;
      display: inline;
      position: absolute;
      top: 0.8vh;
      left: 6vw;
      font-size: 1vw;
    }

    &_register {
      left: 24vw;
    }

    &_register:hover {
      color: #257bd9;
      font-weight: 500;
    }

    .login_btn {
      width: 73.5%;
      height: 5vh;
      background: #257bd9;
      margin-left: 13.5%;
      text-align: center;
      color: white;
      border-radius: 5px;
      line-height: 5vh;
      margin-top: 2vh;
    }

    .login_btn:hover {
      background: #257cd9bd;
    }
    .password_icon {
      width: 1.5vw;
      position: absolute;
      right: 13.5%;
      bottom: 7%;
      img {
        width: 100%;
      }
    }
    .input_box {
      position: relative;
      margin-top: 1vh;
    }
    input {
      width: 70%;
      height: 3vh;
      border: none;
      border-bottom: solid 3px #257cd96c;
      margin-left: 13.5%;
      font-size: 1.2rem;
      padding: 10px;
      outline: none;
      border-radius: 5px;
    }

    input[type="text"] {
      margin-top: 3%;
    }

    input[type="password"] {
      margin-top: 3%;
    }

    input[type="checkbox"] {
      width: 1.3vw;
    }
  }

  .copyright {
    width: 20vw;
    text-align: center;
    color: grey;
    position: absolute;
    bottom: 3vh;
    font-size: 1vw;
    left: calc((100% - 20vw) / 2);

    a {
      color: #d92579b9;
      font-weight: 600;
      text-decoration: none;
    }

    a:hover {
      color: #d92579;
    }
  }
}
</style>
