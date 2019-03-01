<template>
  <el-container style="min-height:100vh">
    <el-header>
      <span>ASIM2019</span>
      <el-button type="text">Upload</el-button>
    </el-header>

    <el-container class="main-wrap">
      <Aside></Aside>
      <el-container>
        <el-main id="main">
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>

    <el-footer>
      <span><router-link to="/admin" > ASIM2019 Copyright @ 2019-2020<router-link></span>
    </el-footer>
  </el-container>
</template>

<style>
.el-header {
  /* background-color: #b3c0d1;
  color: #333; */
  display: flex;
  line-height: 60px;
  justify-content: space-between;
  width: 100vw;
}
.el-footer {
  /* background-color: #b3c0d1;
  color: #333; */
  display: flex;
  line-height: 20px;
  justify-content: space-around;
  width: 100vw;
}

.el-footer > * {
  align-items: stretch;
  text-align: center;
  margin: auto;
}

.main-wrap {
  width: 100%;
  max-width: 1280px;
  margin: auto;
}

.main-wrap > * {
  padding: 10px;
}

#main {
  padding-top: 0px;
}
</style>


<script>
import Aside from "@/components/Aside.vue";

export default {
  components: {
    Aside
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>