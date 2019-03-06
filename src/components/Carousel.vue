<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item" :background="`${item}.jpg`">
      <img :src="`${domain}/${item}.jpg`" style="height:100%;box-shadow:0 1px 1px #eee;">
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__item {
  opacity: 1;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: rgba(255, 255, 255, 0);
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: rgba(255, 255, 255, 0);
}
</style>

<script>
import config from "@/service/config.json";

export default {
  data: () => ({
    domain: config.domain
  })
};
</script>