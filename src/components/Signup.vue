<template>
  <el-form
    :label-position="labelPosition"
    label-width="80px"
    :model="formLabelAlign"
    style="width:50%"
    :rules="rules"
    ref="formLabelAlign"
  >
    <el-form-item label="First Name" prop="firstname">
      <el-input v-model="formLabelAlign.firstname"></el-input>
    </el-form-item>
    <el-form-item label="Last Name" prop="lastname">
      <el-input v-model="formLabelAlign.lastname"></el-input>
    </el-form-item>
    <el-form-item label="Region">
      <el-input v-model="formLabelAlign.region"></el-input>
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="formLabelAlign.email"></el-input>
    </el-form-item>

    <el-form-item label="Upload Paper" prop="PackingImage">
      <el-upload
        action="http://asim.mcfhq.com/util/paper"
        :on-success="uploadSuccess"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList2"
        drag
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          Drag file to here or
          <em>Click to upload</em>
        </div>
        <div class="el-upload__tip" slot="tip">No larger than 10M</div>
      </el-upload>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit('formLabelAlign')">Submit</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        firstname: "",
        lastname: "",
        region: "",
        email: "",
        paper: []
      },
      fileList2: [],
      rules: {
        firstname: [
          { required: true, message: "Please input firstname", trigger: "blur" }
        ],
        lastname: [
          { required: true, message: "Please input lastname", trigger: "blur" }
        ],
        region: [
          {
            required: false,
            message: "Input your country name or region name",
            trigger: "change"
          }
        ],
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit: function(formName) {
      this.formLabelAlign.paper = this.formLabelAlign.paper.join("、");
      this.$refs[formName].validate(
        function(valid) {
          if (valid) {
            this.$request("post", "/user/put", this.formLabelAlign).then(
              function() {
                this.$router.push("./");
              }.bind(this)
            );
          } else {
            console.log("error submit!!");
            return false;
          }
        }.bind(this)
      );
      // console.log(this.formLabelAlign);
    },
    handleRemove(file, fileList) {
      this.formLabelAlign.paper = [];
      fileList.forEach(element => {
        this.formLabelAlign.paper.push(element.name);
      });
    },
    handlePreview() {
      // console.log(file);
    },
    //上传成功后获取到图片路径,并且把原本的图片名称传到后台去，需要拼接一下
    uploadSuccess(res, file, fileList) {
      this.formLabelAlign.paper = [];

      fileList.forEach(element => {
        this.formLabelAlign.paper.push(element.name);
      });
    }
  }
};
</script>