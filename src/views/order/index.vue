<template>
  <div>
    <el-container>
      <sideNav :sideList="sideList"/> 
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
          index:"orderAdministration",
          title:"订单管理",
          icon:"el-icon-s-help"
        },
        {
          index:"invoice",
          title:"发票管理",
          icon:"el-icon-s-help"
        },
        {
          index:"Aftersale",
          title:"售后服务",
          icon:"el-icon-s-help"
        },
      ]
    }
  },
}
</script>