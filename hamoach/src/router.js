import Login from "./components/Login";
import HomePage from "./components/HomePage";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: Login },
  {
    path: "/home",
    component: HomePage
  }
];

export default new VueRouter({
    routes
})