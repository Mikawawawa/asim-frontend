<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="address" label="邮箱"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row.address)" type="text" size="small">删除</el-button>
          <!-- <el-button type="text" size="small">编辑</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <br>
    <el-form :inline="true" :model="formInline" align="right" class="demo-form-inline">
      <el-form-item label="新邮箱">
        <el-input v-model="formInline.new" placeholder="example@example.com"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">增加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          email: "lancelotnemoj@outlook.com"
        }
      ],
      formInline: {
        new: ""
      }
    };
  },
  methods: {
    async handleClick(row) {
      // console.log(row);
      await this.$request("post", "/mail/delete", {
        address: row
      });
      let data = await this.$request("get", "/mail/get");
      this.tableData = data.info;
    },
    async onSubmit() {
      // console.log(this.formInline.new);
      this.$request("post", "/mail/put", {
        address: this.formInline.new
      });
      let data = await this.$request("get", "/mail/get");
      this.tableData = data.info;
    }
  },
  created: async function() {
    let data = await this.$request("get", "/mail/get");
    this.tableData = data.info;
    // console.log(this.tableData);
  }
};
</script>