<template>
  <el-carousel indicator-position="outside" type="card">
    <el-carousel-item v-for="item in 3" :key="item" :background='`${item}.jpg`'>
      <img :src="`http://asim.mcfhq.com/${item}.jpg`" style="height:100%;box-shadow:0 1px 1px #eee;">
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__item{

  opacity: 1.0;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: rgba(255,255,255,0);
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: rgba(255,255,255,0);
}
</style>