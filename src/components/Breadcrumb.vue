<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{BreadcrumbDate.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  props: {
    // BreadcrumbDate: {
    //   type: Object,
    //   default: true,
    // },
  },
  data() {
      return {
          BreadcrumbDate:{}
      }
  },
  mounted() {
      console.log(this.$route.meta);
      this.BreadcrumbDate=this.$route.meta
  },
};
</script>
<style lang="scss">
    .breadcrumb{
        width: 100%;
        height: 46px;
        border-bottom: 1px solid #aaa;
        display: flex;
        align-items: center;
        padding: 0xp 20px;
        box-sizing: border-box;
    }
</style>