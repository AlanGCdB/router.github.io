<template>
  <div>
    <h1>{{ curso }}</h1>
    <router-link :to="{ name: 'descricao' }">Descrição</router-link>
    <router-link :to="{ name: 'aulas' }">Aulas</router-link>
    <transition mode="out-in" name="topDown">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"],
};
</script>

<style>
ul {
  list-style: none;
}
.topDown-enter,
.topDown-leave-to {
  transform: translate3d(0, 50px, 0) scale(0.2);
  opacity: 0;
}
.topDown-enter-active,
.topDown-leave-active {
  transition: all 0.3s;
}
</style>