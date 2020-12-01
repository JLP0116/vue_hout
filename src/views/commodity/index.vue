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
import sideNav from "@/components/sideNavigation"
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
          icon:"el-icon-s-claim",
          title:"商品列表",
          index:"list"
        },
        {
          icon:"el-icon-s-help",
          title:"分类列表",
          index:"classification"
        },
        {
          icon:"el-icon-s-help",
          title:"商品规格",
          index:"Specifications"
        },
        {
          icon:"el-icon-s-help",
          title:"商品类型",
          index:"type"
        },
        {
          icon:"el-icon-s-help",
          title:"商品评价",
          index:"evaluate"
        }
      ]
    }
  },
}
</script>