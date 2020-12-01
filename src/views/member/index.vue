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
import sideNav from '@/components/sideNavigation.vue'
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
          index:"list",
          title:"会员列表",
          icon:"el-icon-s-help"
        },
        {
          index:"Grade",
          title:"会员等级",
          icon:"el-icon-s-help"
        }
      ]
    }
  },
}
</script>