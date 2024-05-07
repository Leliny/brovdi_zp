import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import vuetify from './plugins/vuetify.js';
import App from './App.vue';
import StudyTheory from './components/StudyTheory.vue';
import TreeVisualizer from './components/TreeVisualizer.vue';
import HelloImg from "./components/HelloImg.vue";
import StudyLiterature from "@/components/StudyLiterature.vue";
import StudyVideo from "@/components/StudyVideo.vue";
import Hashstatic from "../hash/HashStatic.vue";

const routes = [
  { path: '/structure/tree/:code', component: TreeVisualizer },
  { path: '/structure/hash/static', component: Hashstatic },
  { path: '/study/theory/btree', component: StudyTheory },
  { path: '/study/theory/btree/literature', component: StudyLiterature },
  { path: '/study/theory/btree/video', component: StudyVideo },
  { path: '/', component: HelloImg },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app');

