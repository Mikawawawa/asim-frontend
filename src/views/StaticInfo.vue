<template>
  <Info title=" ">
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
  props: {
    column: {
      tpye: String,
      default: "Static"
    }
  },
  methods: {
    getContent: async function(title) {
      let res = await this.$request("post", `/util/detail`, {
        hash: title
      });
      this.content = res.code == 1 ? res.data : "# Hello ASIM2019";
    }
  },
  data: function() {
    return {
      content: ""
    };
  },
  created: async function() {
    this.getContent(this.column);
  },
  watch: {
    $route: {
      handler() {
        // handler(newName, oldName) {
        // console.log("$route has changed", this.column);
        (async function(that) {
          await that.getContent(that.column);
        })(this);
      },
      deep: true
    }
  }
};
</script>