<template>
  <Info title="NewsList">
    <News/>
  </Info>
</template>


<script>
import Info from "@/components/Info.vue";
import News from "@/components/News.vue";

export default {
  components: {
    Info,
    News
  }
};
</script>