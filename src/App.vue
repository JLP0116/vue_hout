<template>
  <div class="app">
    <el-container>
      <el-header v-show="show">
        <div>UNI-ADMIN</div>
        <nacmenu></nacmenu>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>
<script>
import nacmenu from "./components/NavMenu";
export default {
  components: {
    nacmenu,
  },
  data() {
    return {
      show: true,
    };
  },
  watch: {
    $route: {
      handler(newVal, objVal) {
        if (newVal.path == "/login") {
          this.show = false;
        } else {
          this.show = true;
        }
      },
    },
  },
  methods: {
    exit() {
      localStorage.removeItem("token");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.app {
  .el-header {
    width: 100%;
    display: flex;
    padding: 0;
    background: #545c64;
    justify-content: space-between;
    align-items: center;
    > div {
      &:nth-child(1) {
        font-weight:500;
        color: #fff;
        margin: 0px 20px;
        font-size: 20px;
      }
    }
  }
  .el-main{
    flex: 1;
    padding: 0;
    box-sizing: border-box;
  }
}
</style>
