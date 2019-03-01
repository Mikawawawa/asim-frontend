<template>
  <Info title="Register">
    <Signup/>
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