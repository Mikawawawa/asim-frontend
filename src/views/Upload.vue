<template>
  <Info :title="column">
    <Signup :towards="column==='Register'?'register':'upload'"/>
  </Info>
</template>

<script>
import Info from "@/components/Info.vue";
import Signup from "@/components/Signup.vue";

export default {
  components: {
    Info,
    Signup
  },
  props: {
    column: {
      tpye: String,
      default: "Static"
    }
  },
  data: () => ({})
};
</script>