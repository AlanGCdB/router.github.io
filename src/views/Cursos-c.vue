<template>
  <div>
    <h1>Curso ativo: {{ curso }}</h1>
    <router-link :to="{ name: 'curso', params: { curso: 'javascript' } }"
      >JavaScript</router-link
    >
    <router-link to="/cursos/html">HTML</router-link>
    <router-link to="/cursos/css">CSS</router-link>
    <transition mode="in-out">
      <router-view :key="curso"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  /*   methods: {
    puxarDados() {
      console.log("Puxar API");
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log(this);
    next((vm) => {
      vm.puxarDados();
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.puxarDados();
    next();
  },
  beforeRouteLeave(to, from, next) {
    const confirmar = confirm("Você deseja sair ?");
    if (confirmar) {
      next();
    }
    console.log("Não saia");
  }, */
};
</script>

<style>
.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>