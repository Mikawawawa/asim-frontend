<template>
  <el-table :data="tableData" style="width: 100%" :showHeader="false">
    <el-table-column prop="title" label="地址">
      <template slot-scope="scope">
        <el-button
          type="text"
          @click="goArticle(scope.row.hash,scope.row.title)"
          style="margin-left: 10px"
        >{{ scope.row.title }}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  created: async function() {
    let res = await this.$request("get", `/news/get`);
    // console.log(res);
    this.tableData =
      res.status === 1
        ? res.info
        : [
            {
              title: "未获取到数据，可能是网络原因",
              href: "./"
            }
          ];
  },
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    goArticle: function(hash, title) {
      this.$router.push({ path: "article", query: { title, hash } });
    }
  }
};
</script>
