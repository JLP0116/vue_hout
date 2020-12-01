<template>
  <div>
    <div class="albunlist">
      <div v-for="(item, index) in albumClassList.list" :key="index">
        <div>
          <img :src="item.url" alt="" />
          <div>
            {{ item.name }}
          </div>
        </div>
        <div>
          <div>
            <el-button @click="seeImg(item.url)"
              ><i class="el-icon-view"></i
            ></el-button>
            <el-button @click="editImg(item.name, item.id)"
              ><i class="el-icon-edit"></i
            ></el-button>
            <el-button @click="deleteImg(item.id)"
              ><i class="el-icon-delete"></i
            ></el-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 查看图片弹出框 -->
    <div class="see">
      <el-dialog :visible.sync="seeImgShow" width="50%">
        <img :src="seeImguel" alt="" />
      </el-dialog>
    </div>
    <!-- 图片编辑 -->
    <el-dialog title="提示" :visible.sync="editImgShow" width="30%">
      <el-form :model="editFrom">
        <el-form-item label="请写入新名称">
          <el-input v-model="editFrom.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editImgShow = false">取 消</el-button>
        <el-button type="primary" @click="editImgx">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import api from "@/api/home/album.js";
export default {
  props: {
    albumClassList: {
      tyle: Object,
      default: true,
    },
  },
  data() {
    return {
      seeImgShow: false,
      seeImguel: "",
      editImgShow: false,
      editFrom: {
        name: "",
        id: "",
      },
    };
  },
  methods: {
    seeImg(url) {
      console.log(url);
      this.seeImguel = url;
      this.seeImgShow = true;
    },
    seehandleClose() {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    editImg(name, id) {
      this.editImgShow = true;
      this.editFrom.name = name;
      this.editFrom.id = id;
    },
    editImgx() {
      api.albumEditImgName(this.editFrom.id, this.editFrom.name).then((res) => {
        this.$message({
          message: "修改成功",
          type: "success",
        });
        this.editImgShow = false;
      });
    },
    deleteImg(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          api.albumDeleteImg(id).then((res) => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style lang="scss">
.see {
  .el-dialog {
    width: 700px;
    height: 400px;
    .el-dialog__header {
      padding: 0;
    }
    .el-dialog__body {
      width: 100%;
      height: 100%;
      padding: 0;
      img{
          width: 100%;
      }
    }
  }
}
.albunlist {
  width: 100%;
  height: 100%;
  display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  > div {
    width: 150px;
    height: 170px;
    margin: 10px;
    > div {
      &:nth-child(1) {
        width: 100%;
        height: 70%;
        position: relative;
        > div {
          position: absolute;
          width: 100%;
          height: 20px;
          bottom: 0px;
          background: rgba($color: #000000, $alpha: 0.5);
          color: #fff;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      &:nth-child(2) {
        width: 100%;
        height: 30%;
        border: 1px solid #aaa;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-around;
        > div {
          width: 80%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          .el-button + .el-button {
            margin: 0;
          }
          .el-button {
            padding: 12px;
            border-radius: 0px;
          }
        }
      }
    }
  }
}
</style>
