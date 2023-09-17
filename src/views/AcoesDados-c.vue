<template>
  <div>
    <div v-if="loading">Carregando...</div>
    <div v-else>{{ acoes }}</div>
  </div>
</template>

<script>
export default {
  props: ["simbolo"],
  data() {
    return {
      loading: true,
      acoes: null,
    };
  },
  methods: {
    puxarAcoes() {
      this.loading = true;
      this.acoes = null;
      fetch(`https://api.origamid.dev/stock/${this.simbolo}/quote`)
        .then((r) => r.json())
        .then((r) => {
          this.acoes = r;
          this.loading = false;
        });
    },
  },
  created() {
    this.puxarAcoes();
  },
  watch: {
    $route: "puxarAcoes",
  },
  /* beforeRouteUpdate(to, from, next) {
    this.puxarAcoes(to.params.simbolo);
    next();
  }, */
};
</script>

<style>
</style>