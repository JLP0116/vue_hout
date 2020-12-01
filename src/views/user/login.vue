<template>
  <div class="login">
    <div>
      <h1>UNI-ADMIN</h1>
    </div>
    <div>
      <input type="text" v-model="username" />
      <br />
      <input type="password" v-model="password" />
    </div>
    <div>
      <button @click="login">立即登录</button>
    </div>
  </div>
</template>
<script>
import api from "@/api/user.js";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      api.poshLogin(this.username, this.password).then((res) => {
        console.log(res.data.data);
        this.$message({
          message: "登录成功！",
          type: "success",
        });
        localStorage.setItem("token",res.data.data.token)
        this.$router.push("/home");
      });
    },
  },
};
</script>
<style lang="scss">
.login {
  width: 500px;
  margin: 200px auto;
  border: 1px solid #aaa;
  text-align: center;
  color: #6c757d;
  > div {
    &:nth-child(1) {
      box-sizing: border-box;
      padding: 10px;
      border-bottom: 1px solid #aaa;
    }
    &:nth-child(2) {
      box-sizing: border-box;
      padding: 10px;
      > input {
        margin: 10px 0px;
        outline: none;
        width: 80%;
        height: 26px;
        border: #6c757d 1px solid;
        border-radius: 5px;
      }
    }
    &:nth-child(3) {
      box-sizing: border-box;
      padding: 10px;
      > button {
        width: 80%;
        height: 36px;
        background: #008080;
        border: none;
        color: #fff;
        outline: none;
        border-radius: 5px;
      }
    }
  }
}
</style>
