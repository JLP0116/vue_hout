<template>
  <div class="navmenu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item
        :index="item.index"
        v-for="(item, index) in navmenuList"
        :key="index"
        >{{ item.title }}</el-menu-item
      >
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">修改</el-menu-item>
        <el-menu-item index="" @click="tc">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import api from "@/api/user.js";
export default {
  data() {
    return {
      activeIndex: "/home",
      activeIndex2: "1",
      navmenuList: [
        {
          index: "/home",
          title: "首页",
        },
        {
          index: "/commodity",
          title: "商品",
        },
        {
          index: "/order",
          title: "订单",
        },
        {
          index: "/member",
          title: "会员",
        },
        {
          index: "/setup",
          title: "设置",
        },
      ],
    };
  },
  methods: {
    tc() {
      api.tclogin().then((res) => {
        localStorage.removeItem("token");
        this.$router.push("/login");
      });
    },
  },
};
</script>
<style lang="scss">
.navmenu {
  padding: 0;
  margin: 0;
}
</style>
