<template>
  <Info :title="this.title">
    <Marked :input="content"/>
  </Info>
</template>

<script>
import Info from "@/components/Info.vue";
import Marked from "@/components/Marked.vue";

export default {
  components: {
    Info,
    Marked
  },
  methods: {
    getContent: async function(title) {
      // title = "123";
      let res = await this.$request("post", `/util/detail`, {
        hash: title
      });
      this.content = res.code == 1 ? res.data : "# Hello ASIM2019";
    }
  },
  data: function() {
    return {
      content: "",
      title: ""
    };
  },
  created: async function() {
    this.title = this.$route.query.title;
    this.getContent(this.$route.query.hash);
  },
  watch: {
    $route: {
      handler() {
        // console.log("$route has changed", this.title);
        (async function(that) {
          await that.getContent(this.$route.query.hash);
        })(this);
      },
      deep: true
    }
  }
};
</script>