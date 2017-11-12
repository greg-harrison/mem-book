<template>
  <div class="sidebar">
    <ul>
      <li>
        <div class="btn">Test</div>
      </li>
      <li>
        <div class="btn">Test</div>
      </li>
      <li>
        <div class="btn">Test</div>
      </li>
      <li>
        <div class="btn">Test</div>
      </li>
      <li>
        <div class="btn">Test</div>
      </li>
      <li>
        <div class="btn">Test</div>
      </li>
    </ul>
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
.sidebar {
  max-width: 85px;
  width: 85px;
  position: absolute;
  height: 100%;
  background-color: green;
  left: 0;
  top: 0;
  bottom: 0;
  ul {
    list-style: none;
    padding: 0;
  }
}
</style>
