<template>
  <div class="sidenavigation">
    <el-aside width="200px">
      <el-menu
        class="sidebar-el-menu"
        :default-active="onRoutes"
        text-color="#000"
        active-text-color="#008080"
        background-color="#fff"
        unique-opened
        router
      >
        <template v-for="item in sideList">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.tiele">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu
                  v-if="subItem.subs"
                  :index="subItem.index"
                  :key="subItem.index"
                >
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item
                    v-for="(threeItem, i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                  >
                    {{ threeItem.title }}</el-menu-item
                  >
                </el-submenu>
                <el-menu-item
                  v-else
                  :index="subItem.index"
                  :key="subItem.index"
                  >{{ subItem.title }}</el-menu-item
                >
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
export default {
  props: {
    sideList: {
      tyle: Object,
      default: true,
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
 
};
</script>
<style lang="scss">
  .sidenavigation{
    height: 90vh;
    border-right: 1px solid #aaa;
    box-sizing: border-box;
  }
</style>