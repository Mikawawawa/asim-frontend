<template>
  <div>
    <Carousel/>

    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <More>
            <News/>
          </More>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <More>
            <Marked :input="content_1"/>
          </More>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <Marked :input="content_2"/>
    </el-row>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import News from "@/components/News.vue";
import Marked from "@/components/Marked.vue";
import More from "@/components/More.vue";

export default {
  components: {
    Carousel,
    News,
    Marked,
    More
  },
  data: function() {
    return {
      content_1: "",
      content_2: ""
    };
  },
  methods: {
    getContent: async function() {
      let res1 = await this.$request("post", `/util/detail`, {
        hash: "home1"
      });
      this.content_1 = res1.code == 1 ? res1.data : "# Hello ASIM2019";
      let res2 = await this.$request("post", `/util/detail`, {
        hash: "home2"
      });
      this.content_2 = res2.code == 1 ? res2.data : "# Hello ASIM2019";
    }
  },
  created: async function() {
    this.getContent();
  }
};
</script>

<style>
.more {
  height: 80px;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #ffffff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
