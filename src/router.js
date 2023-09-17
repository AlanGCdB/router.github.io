import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home-c.vue";
import Cursos from "./views/Cursos-c.vue";
import Curso from "./views/Curso-c.vue";
import CursoAulas from "./views/CursoAulas-c.vue";
import CursoDescricao from "./views/CursoDescricao-c.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/cursos",
      component: Cursos,
      props: true,
      /*  beforeEnter: (to, from, next) => {
        console.log("Foi para curso");
        next();
      }, */
      children: [
        {
          name: "curso",
          path: ":curso",
          component: Curso,
          props: true,
          children: [
            {
              name: "aulas",
              path: "aulas",
              component: CursoAulas,
            },
            {
              name: "descricao",
              path: "descricao",
              component: CursoDescricao,
            },
          ],
        },
      ],
    },
  ],
});
