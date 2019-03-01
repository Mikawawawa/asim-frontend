<template>
  <el-row type="flex" class="banner" justify="center" style="width:100%;">
    <el-row :span="4"></el-row>
    <el-col :span="4" class="item">
      <div class="grid-content">
        <h1 style="font-size:4rem;margin:0px">ASIM2019</h1>
      </div>
    </el-col>
    <el-col :span="6" class="item">
      <div class="grid-content">
        <el-row
          style="line-height:50px;margin:0px"
        >The 7th Aisa International Symposium on Mechatronics</el-row>
        <el-row style="line-height:50px;margin:0px">September 19~22,2019. Hangzhou,China</el-row>
      </div>
    </el-col>
    <el-col :span="2">
      <el-button type="text" class="light-button" @click="()=>{this.$router.push('./upload')}">
        <span style="padding:2px">Register</span>
        <el-badge class="mark" value="click"/>
      </el-button>
    </el-col>
    <el-row :span="6"></el-row>
  </el-row>
</template>

<script>
export default {};
</script>

<style>
.light-button,
.light-button:hover {
  color: aliceblue !important;
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

