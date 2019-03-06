<template>
  <div id="editor-wrap">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="类型">
        <el-select v-model="formInline.type" placeholder="选择类型">
          <el-option label="文章" value="news"></el-option>
          <el-option label="Call For Papers" value="call_for_papers"></el-option>
          <el-option label="Paper Submission" value="paper_submission"></el-option>
          <el-option label="Committee" value="committee"></el-option>
          <el-option label="Program" value="program"></el-option>
          <el-option label="Keynotes" value="keynotes"></el-option>
          <el-option label="Young scientist Award" value="young_scientist_award"></el-option>
          <el-option label="Exhibition" value="exhibition"></el-option>
          <el-option label="Register" value="register"></el-option>
          <el-option label="Transportation" value="transportation"></el-option>
          <el-option label="Venue" value="venue"></el-option>
          <el-option label="Accommodation" value="accommodation"></el-option>
          <el-option label="Connect Us" value="connect_us"></el-option>
          <el-option label="HOME" value="home"></el-option>
          <el-option label="AD" value="ad"></el-option>
          <el-option label="Footer" value="footer"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="题目" v-if="formInline.type==='news'">
        <el-input v-model="formInline.title" placeholder="请输入标题"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
      </el-form-item>
    </el-form>

    <mavon-editor id="editor" v-model="value" ref="md" @imgAdd="$imgAdd"/>
  </div>
</template>

<style>
#editor-wrap {
  /* min-height: 100vh; */
}

#editor {
  min-height: 75vh;
}
</style>


<script>
// import axios from "axios";

export default {
  data() {
    return {
      img: 0,
      value: "## ASIM 2019",
      formInline: {
        user: "",
        type: ""
      }
    };
  },
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      console.log($file);
      // 第一步.将图片上传到服务器.
      this.$request("post", "/util/upload", {
        content: $file.miniurl.split(",")[1],
        name: new Date().getTime(),
        type: $file.type.split("/")[1],
        noticy: false,
        trans: true
      }).then(
        function(data) {
          this.$refs.md.$img2Url(pos, `http://asim.mcfhq.com/${data.data}`);
        }.bind(this)
      );
    },
    onSubmit() {
      if (typeof this.formInline.title === "undefined") {
        // console.log(this.value, this.formInline.type);
        this.$request("post", "/util/upload", {
          content: this.value,
          name: this.formInline.type,
          type: "md",
          noticy: false
        }).then(
          function() {
            this.$router.push("./");
          }.bind(this)
        );
      } else {
        // console.log(this.value, this.formInline.type, this.formInline.title);
        this.$request("post", "/news/put", {
          title: this.formInline.title,
          content: this.value
        }).then(
          function() {
            this.$router.push("./");
          }.bind(this)
        );
      }
    }
  }
};
</script>

