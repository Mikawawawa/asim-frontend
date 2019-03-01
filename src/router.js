import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Upload from "./views/Upload.vue";
import NewsList from "./views/NewsList.vue";
import StaticInfo from "./views/StaticInfo.vue";
import Admin from "./views/Admin.vue";
import Article from "./views/Article.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/article",
      name: "article",
      component: Article
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload
    },
    {
      path: "/news",
      name: "news",
      component: NewsList
    },
    {
      path: "/important_dates",
      component: StaticInfo,
      props: { column: "important_dates" }
    },
    {
      path: "/call_for_papers",
      component: StaticInfo,
      props: { column: "call_for_papers" }
    },
    {
      path: "/committee",
      component: StaticInfo,
      props: { column: "committee" }
    },
    {
      path: "/program",
      component: StaticInfo,
      props: { column: "program" }
    },
    {
      path: "/keynotes",
      component: StaticInfo,
      props: { column: "keynotes" }
    },
    {
      path: "/young_scientist_award",
      component: StaticInfo,
      props: { column: "young_scientist_award" }
    },
    {
      path: "/exhibition",
      component: StaticInfo,
      props: { column: "exhibition" }
    },
    {
      path: "/register",
      component: StaticInfo,
      props: { column: "register" }
    },
    {
      path: "/transportation",
      component: StaticInfo,
      props: { column: "transportation" }
    },
    {
      path: "/venue",
      component: StaticInfo,
      props: { column: "venue" }
    },
    {
      path: "/accommodation",
      component: StaticInfo,
      props: { column: "accommodation" }
    },
    {
      path: "/connect_us",
      component: StaticInfo,
      props: { column: "connect_us" }
    }
  ]
});
