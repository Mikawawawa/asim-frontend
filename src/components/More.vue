<template>
  <div
    style="display:flex;flex-direction:column;justify-content: flex-start;align-items: flex-end;height:350px;overflow:hidden;"
  >
    <el-button type="text" @click="goMore" style="width：20px;float:right;padding:0px">More</el-button>
    <slot style="padding-top:0px"></slot>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "./"
    }
  },
  methods: {
    goMore() {
      this.$router.push(this.url);
    }
  }
};
</script>

