<template>
  <el-aside width="220px" style="background-color: rgb(238, 241, 246);">
    <el-menu class="el-menu-vertical-demo" align="left" v-bind:router="true" default-active="./">
      <el-menu-item index="./">
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
      </el-menu-item>

      <el-menu-item index="./news">
        <i class="el-icon-news"></i>
        <span slot="title">What's New</span>
      </el-menu-item>

      <el-menu-item index="./call_for_papers">
        <i class="el-icon-document"></i>
        <span slot="title">Call For Papers</span>
      </el-menu-item>

      <el-menu-item index="./committee">
        <i class="el-icon-tickets"></i>
        <span slot="title">Committee</span>
      </el-menu-item>

      <el-menu-item index="./program">
        <i class="el-icon-date"></i>
        <span slot="title">Program</span>
      </el-menu-item>

      <el-menu-item index="./keynotes">
        <i class="el-icon-printer"></i>
        <span slot="title">Keynotes</span>
      </el-menu-item>

      <el-menu-item index="./young_scientist_award">
        <i class="el-icon-star-off"></i>
        <span slot="title">Young scientist Award</span>
      </el-menu-item>

      <el-menu-item index="./exhibition">
        <i class="el-icon-goods"></i>
        <span slot="title">Exhibition</span>
      </el-menu-item>

      <el-menu-item index="./register">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">Register</span>
      </el-menu-item>

      <el-menu-item index="./transportation">
        <i class="el-icon-sort"></i>
        <span slot="title">Transportation</span>
      </el-menu-item>

      <el-menu-item index="./venue">
        <i class="el-icon-bell"></i>
        <span slot="title">Venue</span>
      </el-menu-item>

      <el-menu-item index="./accommodation">
        <i class="el-icon-setting"></i>
        <span slot="title">Accommodation</span>
      </el-menu-item>

      <el-menu-item index="./connect_us">
        <i class="el-icon-service"></i>
        <span slot="title">Connect Us</span>
      </el-menu-item>
    </el-menu>
    <Marked style="width:160px;" class="guanggao"/>
  </el-aside>
</template>

<style>
.guanggao {
  width: 160px;
}

.guanggao > img {
  width: 100%;
}
</style>


<script>
import Marked from "@/components/Marked.vue";
export default {
  components: {
    Marked
  },
  data: function() {
    return {};
  },
  methods: {},
  created: async function() {
    let res = await this.$request("post", `/util/detail`, {
      hash: "ad"
    });
    this.content = res.code == 1 ? res.data : "# Hello ASIM2019";
  }
};
</script>