<template>
  <div class="landing container p-0">
    Testing
  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "landing",
  data: () => ({
    results: []
  }),
  methods: {
  },
  mounted() { }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style/_variables.scss";
.landing {
  margin-top: 3rem;
  text-align: center;
  .main-button {
    padding: 1rem 3rem;
    font-size: 2rem;
    max-width: 252px;
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 10px;
  }
}
</style>
