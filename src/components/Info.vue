<template>
  <el-card class="box-card">
    <el-button icon="el-icon-back" circle size="mini" @click="goBack()" type="text"></el-button>
    <h3>{{title}}</h3>
    <br>
    <slot>
      <div v-for="o in 4" :key="o" class="text item">{{'填充内容 ' + o }}</div>
    </slot>
  </el-card>
</template>

<style>
.el-card {
  min-height: 99%;
  text-align: left;
}
</style>


<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>