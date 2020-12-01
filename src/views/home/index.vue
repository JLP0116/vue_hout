<template>
  <div>
    <el-container>
      <sideNav :sideList="sideList"></sideNav>
      <el-main>
        <Breadcrumb :BreadcrumbDate=BreadcrumbDate></Breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import sideNav from "@/components/sideNavigation";
import Breadcrumb from "@/components/Breadcrumb"
export default {
  components: {
    sideNav,
    Breadcrumb
  },
  mounted() {
    this.BreadcrumbDate=this.$route.meta
  },
  data() {
    return {
      BreadcrumbDate:{},
      sideList: [
        {
          icon: "el-icon-s-home",
          index: "backstage",
          title: "后台管理",
        },
        {
          icon: "el-icon-picture",
          index: "album",
          title: "相册管理",
        },
        {
          icon: "el-icon-s-claim",
          index: "commodity",
          title: "商品列表",
        },
      ],
    };
  },
};
</script>
