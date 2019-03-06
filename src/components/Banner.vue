<template>
  <el-row type="flex" style="width:100%" justify="center">
    <el-col :span="2">
      <div style="height:100%"></div>
    </el-col>
    <el-col
      :span="20"
      type="flex"
      class="banner"
      justify="center"
      style="width:100%;max-width:1280px"
    >
      <img src="@/assets/banner.jpg" style="width:100%">
    </el-col>
    <el-col :span="2">
      <span style="float:left">
        <el-button type="text" class="light-button" @click="()=>{this.$router.push('./upload')}">
          <span style="padding:2px">Upload Paper</span>
        </el-button>

        <el-button type="text" class="light-button" @click="()=>{this.$router.push('./register')}">
          <span style="padding:2px">Register</span>
          <el-badge class="mark" value="click"/>
        </el-button>
      </span>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style>
.light-button,
.light-button:hover {
  color: aliceblue !important;
  font-size: 1.5vmax;
}

.light-button:hover {
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.baner .banner > * {
  background-color: rgba(255, 255, 255, 0) !important;
  padding: 0px !important;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: left;
  color: aliceblue;
}
.row-bg {
  min-height: 100px;
}
</style>

