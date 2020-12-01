<template>
  <div class="album">
    <div>
      <div>
        <el-select v-model="check.region" placeholder="请选择">
          <el-option
            v-for="item in sort"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input v-model="check.user" placeholder="请输入图片名称"></el-input>
        <el-button type="success" @click="onSubmit">查询</el-button>
      </div>
      <div>
        <el-button type="success" @click="addClass">创建相册</el-button>
        <el-button type="warning">上传图片</el-button>
      </div>
    </div>
    <div>
      <div>
        <div
          v-for="(item, index) in albumListData.list"
          :key="index"
          @click="albumClassification(item.id)"
        >
          <div>{{ item.name }}</div>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ item.images_count
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div>
        <AlbunList :albumClassList="albumClassList"></AlbunList>
      </div>
    </div>
    <!-- 新增分类 -->
    <el-dialog title="提示" :visible.sync="addClassShow">
      <el-form :model="addAlbumClassDate">
        <el-form-item label="相册名称">
          <el-input
            v-model="addAlbumClassDate.name"
            autocomplete="off"
            placeholder="请输入相册名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="相册排序">
          <el-input-number v-model="addAlbumClassDate.order" :min="1" :max="10"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addClassShow = false">取 消</el-button>
        <el-button type="primary" @click="addClassShow = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import api from "@/api/home/album.js";
import AlbunList from "./assembly/AlbunList";
const sort = [
  {
    value: "升序",
    label: "升序",
  },
  {
    value: "降序",
    label: "降序",
  },
];
export default {
  components: {
    AlbunList,
  },
  data() {
    return {
      sort,
      albumListData: [],
      page: 1,
      limit: 10,
      id: 74,
      check: {
        user: "",
        region: "",
      },
      albumClassList: [],
      addClassShow: false,
      addAlbumClassDate: {
        order: "",
        name: "",
      },
    };
  },
  mounted() {
    this.albumDate();
  },
  methods: {
    albumDate() {
      api.albumList(this.page, this.limit).then((res) => {
        console.log(res);
        this.albumListData = res.data.data;
      });
    },
    onSubmit() {},
    albumClassification(id) {
      api.albumClass(id, this.page).then((res) => {
        this.albumClassList = res.data.data;
      });
    },
    // 新增分类
    addClass(){
      console.log(111);
      this.addClassShow=true
    }
  },
};
</script>
<style lang="scss">
.album {
  width: 100%;
  height: 79vh;
  > div {
    &:nth-child(1) {
      box-sizing: border-box;
      padding: 10px 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
      > div {
        width: 50%;
        display: flex;
        align-items: center;
        &:nth-child(1) {
          justify-content: space-between;
        }
        &:nth-child(2) {
          width: 25%;
        }
      }
    }
    &:nth-child(2) {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      > div {
        &:nth-child(1) {
          width: 20%;
          height: 100%;
          border-right: solid #aaa 1px;
          > div {
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            padding: 10px;
            border-bottom: 1px solid #aaa;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .el-dropdown {
              border: 1px solid #aaa;
              border-radius: 5px;
              padding: 5px 10px;
              background: #f8f9fa;
            }
          }
        }
        &:nth-child(2) {
          flex: 1;
        }
      }
    }
  }
}
</style>
