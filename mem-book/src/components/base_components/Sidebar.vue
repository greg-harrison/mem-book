<template>
  <div>
    <h1>
      Hello world
    </h1>
  </div>
</template>

<script>

export default {
  name: "sidebar",
  data() {
  },
  methods: {
  },
  mounted() {
    console.log('mounted');
    // Check user status
  }
};
</script>

<style scoped lang="scss">
@import "../../style/_variables.scss";

.navbar {
  background-color: $blue;
  a {
    color: $cream;
    text-decoration: none;
  }
  button.navbar-toggler {
    color: $cream;
  }
  .router-link-active {
    color: $cream !important;
  }
}
</style>
