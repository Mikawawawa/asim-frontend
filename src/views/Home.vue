<template>
  <div>
    <Carousel/>

    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <More url="./news">
            <News/>
          </More>
        </div>
      </el-col>
      <el-col :span="12">
        <div class>
          <More url="./call_for_papers">
            <Marked :input="callForPapers"/>
          </More>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <Marked :input="home"/>
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
      home: "",
      callForPapers: ""
    };
  },
  methods: {
    getContent: async function() {
      let res = await this.$request("post", `/util/detail`, {
        hash: "home"
      });
      this.home = res.code == 1 ? res.data : "# Hello ASIM2019";
      res = await this.$request("post", `/util/detail`, {
        hash: "call_for_papers"
      });
      this.callForPapers = res.code == 1 ? res.data : "# Hello ASIM2019";
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
