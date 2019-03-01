<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column prop="date" label="日期"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.id)" type="text" size="small">删除</el-button>
        <!-- <el-button type="text" size="small">编辑</el-button> -->
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
          date: "2016-05-02",
          title: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    async handleClick(row) {
      await this.$request("post", "/news/delete", {
        id: row
      });
      let data = await this.$request("get", "/news/get");
      this.tableData = data.info;
    }
  },
  created: async function() {
    let data = await this.$request("get", "/news/get");
    this.tableData = data.info;
    // console.log(data);
  }
};
</script>