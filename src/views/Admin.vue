<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="文章编辑" name="first">
      <Editor/>
    </el-tab-pane>
    <el-tab-pane label="文章管理" name="second">
      <News/>
    </el-tab-pane>
    <el-tab-pane label="用户管理" name="third">
      <User/>
    </el-tab-pane>
    <el-tab-pane label="邮件管理" name="fourth">
      <Mail/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Editor from "@/components/Editor.vue";
import News from "@/components/NewsAdmin.vue";
import User from "@/components/UserAdmin.vue";
import Mail from "@/components/MailAdmin.vue";

export default {
  components: {
    Editor,
    News,
    User,
    Mail
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // }
  }
};
</script>