<template>
  <div v-html="compiledMarkdown" class="v-show" style="padding:20px"></div>
</template>
<script>
import marked from "marked";
let rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
export default {
  name: "App",
  props: {
    input: {
      type: String,
      default: "# HELLO!"
    }
  },
  data() {
    return {};
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true });
    }
  }
};
</script>

<style>
.v-show > h1,
.v-show > h2,
.v-show > h3,
.v-show > h4 {
  color: #111111;
  font-weight: 400;
  margin-top: 1em;
}

.v-show > h1,
.v-show > h2,
.v-show > h3,
.v-show > h4,
.v-show > h5 {
  font-family: Georgia, Palatino, serif;
}
.v-show > h1,
.v-show > h2,
.v-show > h3,
.v-show > h4,
.v-show > h5,
.v-show > p,
.v-show > dl {
  margin-bottom: 16px;
  padding: 0;
}
.v-show > h1 {
  font-size: 48px;
  line-height: 54px;
}
.v-show > h2 {
  font-size: 36px;
  line-height: 42px;
}
.v-show > h1,
.v-show > h2 {
  /* border-bottom: 1px solid #efeaea; */
  padding-bottom: 10px;
}
.v-show > h3 {
  font-size: 24px;
  line-height: 30px;
}
.v-show > h4 {
  font-size: 21px;
  line-height: 26px;
}
.v-show > h5 {
  font-size: 18px;
  list-style: 23px;
}
.v-show > a {
  color: #0099ff;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
.v-show > a:hover {
  text-decoration: none;
  color: #ff6600;
}

.v-show > ul,
.v-show > ol {
  padding: 0;
  padding-left: 24px;
  margin: 0;
}
.v-show > li {
  line-height: 24px;
}
.v-show > p,
.v-show > ul,
.v-show > ol {
  font-size: 16px;
  line-height: 24px;
}

.v-show > ol ol,
.v-show > ul ol {
  list-style-type: lower-roman;
}

.v-show > code,
.v-show > pre {
  border-radius: 3px;
  background-color: #f7f7f7;
  color: inherit;
}

.v-show > code {
  font-family: Consolas, Monaco, Andale Mono, monospace;
  margin: 0 2px;
}

.v-show > pre {
  line-height: 1.7em;
  overflow: auto;
  padding: 6px 10px;
  border-left: 5px solid #6ce26c;
}

.v-show > pre > code {
  border: 0;
  display: inline;
  max-width: initial;
  padding: 0;
  margin: 0;
  overflow: initial;
  line-height: inherit;
  font-size: 0.85em;
  white-space: pre;
  background: 0 0;
}

.v-show > code {
  color: #666555;
}

.v-show > aside {
  display: block;
  /* float: right; */
  float: to left;
  width: 390px;
}
.v-show > blockquote {
  border-left: 0.5em solid #eee;
  padding: 0 0 0 2em;
  margin-left: 0;
}
.v-show > blockquote cite {
  font-size: 14px;
  line-height: 20px;
  color: #bfbfbf;
}
.v-show > blockquote cite:before {
  content: "\2014 \00A0";
}

.v-show > blockquote p {
  color: #666;
}
.v-show > hr {
  text-align: left;
  color: #999;
  height: 2px;
  padding: 0;
  margin: 16px 0;
  background-color: #e7e7e7;
  border: 0 none;
}

.v-show > dl {
  padding: 0;
}

.v-show > dl dt {
  padding: 10px 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: bold;
}

.v-show > dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

.v-show > dd {
  margin-left: 0;
}

.v-show > button,
.v-show > input,
.v-show > select,
.v-show > textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
  *vertical-align: middle;
}
.v-show > button,
.v-show > input {
  line-height: normal;
  *overflow: visible;
}
.v-show > button::-moz-focus-inner,
.v-show > input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.v-show > button,
.v-show > input[type="button"],
.v-show > input[type="reset"],
.v-show > input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button;
}
.v-show > input[type="checkbox"],
.v-show > input[type="radio"] {
  cursor: pointer;
}
/* override default chrome & firefox settings */
.v-show > input:not([type="image"]),
.v-show > textarea {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.v-show > input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
.v-show > input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
.v-show > label,
.v-show > input,
.v-show > select,
.v-show > textarea {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: normal;
  line-height: normal;
  margin-bottom: 18px;
}
.v-show > input[type="checkbox"],
.v-show > input[type="radio"] {
  cursor: pointer;
  margin-bottom: 0;
}
.v-show > input[type="text"],
.v-show > input[type="password"],
.v-show > textarea,
.v-show > select {
  display: inline-block;
  width: 210px;
  padding: 4px;
  font-size: 13px;
  font-weight: normal;
  line-height: 18px;
  height: 18px;
  color: #808080;
  border: 1px solid #ccc;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.v-show > select,
.v-show > input[type="file"] {
  height: 27px;
  line-height: 27px;
}
.v-show > textarea {
  height: auto;
}
/* grey out placeholders */
.v-show > :-moz-placeholder {
  color: #bfbfbf;
}
.v-show > ::-webkit-input-placeholder {
  color: #bfbfbf;
}
.v-show > input[type="text"],
.v-show > input[type="password"],
.v-show > select,
.v-show > textarea {
  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
  transition: border linear 0.2s, box-shadow linear 0.2s;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}
.v-show > input[type="text"]:focus,
.v-show > input[type="password"]:focus,
.v-show > textarea:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 8px rgba(82, 168, 236, 0.6);
  -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 8px rgba(82, 168, 236, 0.6);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 8px rgba(82, 168, 236, 0.6);
}
/* buttons */
.v-show > button {
  display: inline-block;
  padding: 4px 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 18px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  background-color: #0064cd;
  background-repeat: repeat-x;
  background-image: -khtml-gradient(
    linear,
    left top,
    left bottom,
    from(#049cdb),
    to(#0064cd)
  );
  background-image: -moz-linear-gradient(top, #049cdb, #0064cd);
  background-image: -ms-linear-gradient(top, #049cdb, #0064cd);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #049cdb),
    color-stop(100%, #0064cd)
  );
  background-image: -webkit-linear-gradient(top, #049cdb, #0064cd);
  background-image: -o-linear-gradient(top, #049cdb, #0064cd);
  background-image: linear-gradient(top, #049cdb, #0064cd);
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid #004b9a;
  border-bottom-color: #003f81;
  -webkit-transition: 0.1s linear all;
  -moz-transition: 0.1s linear all;
  transition: 0.1s linear all;
  border-color: #0064cd #0064cd #003f81;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
}
.v-show > button:hover {
  color: #fff;
  background-position: 0 -15px;
  text-decoration: none;
}
.v-show > button:active {
  -webkit-box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15),
    0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15),
    0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
}
.v-show > button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.v-show > table {
  *border-collapse: collapse; /* IE7 and lower */
  border-spacing: 0;
  width: 100%;
}
.v-show > table {
  border: solid #ccc 1px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  /*-webkit-box-shadow: 0 1px 1px #ccc;
    -moz-box-shadow: 0 1px 1px #ccc;
    box-shadow: 0 1px 1px #ccc;   */
}
.v-show > table tr:hover {
  background: #fbf8e9;
  -o-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}
.v-show > table td,
.v-show > .table th {
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.v-show > table th {
  background-color: #dce9f9;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ebf3fc),
    to(#dce9f9)
  );
  background-image: -webkit-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image: -moz-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image: -ms-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image: -o-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image: linear-gradient(top, #ebf3fc, #dce9f9);
  /*-webkit-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;
    -moz-box-shadow:0 1px 0 rgba(255,255,255,.8) inset;
    box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;*/
  border-top: none;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  padding: 5px;
}

.v-show > table td:first-child,
.v-show > table th:first-child {
  border-left: none;
}

.v-show > table th:first-child {
  -moz-border-radius: 6px 0 0 0;
  -webkit-border-radius: 6px 0 0 0;
  border-radius: 6px 0 0 0;
}
.v-show > table th:last-child {
  -moz-border-radius: 0 6px 0 0;
  -webkit-border-radius: 0 6px 0 0;
  border-radius: 0 6px 0 0;
}
.v-show > table th:only-child {
  -moz-border-radius: 6px 6px 0 0;
  -webkit-border-radius: 6px 6px 0 0;
  border-radius: 6px 6px 0 0;
}
.v-show > table tr:last-child td:first-child {
  -moz-border-radius: 0 0 0 6px;
  -webkit-border-radius: 0 0 0 6px;
  border-radius: 0 0 0 6px;
}
.v-show > table tr:last-child td:last-child {
  -moz-border-radius: 0 0 6px 0;
  -webkit-border-radius: 0 0 6px 0;
  border-radius: 0 0 6px 0;
}
</style>
