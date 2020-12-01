<template>
  <div>
    <el-container>
       <sideNav :sideList="sideList"></sideNav>
      <el-main>
        <Breadcrumb></Breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import sideNav from '@/components/sideNavigation.vue';
import Breadcrumb from "@/components/Breadcrumb"
export default {
  components:{
    sideNav,
    Breadcrumb
  },
  data() {
    return {
      sideList:[
        {
          index:"Foundation",
          title:"基础设置",
          icon:"el-icon-s-help"
        },
        {
          index:"logistics",
          title:"物流设置",
          icon:"el-icon-s-help"
        },
        {
          index:"management",
          title:"管理员管理",
          icon:"el-icon-s-help"
        },
        {
          index:"trading",
          title:"交易设置",
          icon:"el-icon-s-help"
        },
        {
          index:"ceshi",
          title:"测试设置",
          icon:"el-icon-s-help"
        },
      ]
    }
  },
}
</script>