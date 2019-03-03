<template>
  <el-row type="flex" class="banner" justify="center" style="width:100%;">
    <el-col :span="20" class="item">
      <img src="@/assets/banner.jpg" style="height:100%">
    </el-col>
    <el-col :span="2">
      <el-button type="text" class="light-button" @click="()=>{this.$router.push('./upload')}">
        <span style="padding:2px">Register</span>
        <el-badge class="mark" value="click"/>
      </el-button>
    </el-col>
    <el-row :span="2"></el-row>
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

