import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import RepositoriesGuide from "../views/RepositoriesGuide.vue";
import SkillsTracker from "../views/SkillsTracker.vue";
import LearnRoadmap from "../views/LearnRoadmap.vue";
import SourcesList from "../views/SourcesList.vue";

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: "/repositories", name: "RepositoriesGuide", component: RepositoriesGuide},
  { path: "/skills_tracker", name: "SkillsTracker", component: SkillsTracker},
  { path: "/learn_roadmap", name: "LearnRoadmap", component: LearnRoadmap},
  { path: "/sources_list", name: "SourcesList", component: SourcesList}
];

const router = new VueRouter({
  routes
});

export default router;
