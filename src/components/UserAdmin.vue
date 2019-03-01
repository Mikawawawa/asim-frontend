<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="firstname" label="名字"></el-table-column>
    <el-table-column prop="lastname" label="姓氏"></el-table-column>
    <el-table-column prop="region" label="来源"></el-table-column>
    <el-table-column prop="email" label="邮箱"></el-table-column>
    <el-table-column prop="paper" label="文章"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          firstname: "Zato",
          lastname: "Chiang",
          region: "China",
          paper: "",
          title: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    async handleClick(row) {
      // console.log(row);
      await this.$request("post", "/user/delete", {
        id: row
      });
      let data = await this.$request("get", "/user/get");
      this.tableData = data.info;
    }
  },
  created: async function() {
    let data = await this.$request("get", "/user/get");
    this.tableData = data.info;
    // console.log(this.tableData);
  }
};
</script>