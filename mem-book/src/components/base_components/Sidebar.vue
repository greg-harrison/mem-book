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
  box-shadow: 0 0 2px steelblue;
  left: 0;
  top: 0;
  bottom: 0;
  ul {
    list-style: none;
    padding: 0;
    align-items: vertical;
    height: 100%;
    li {
      height: min-content;
      width: 100%;
    }
    .btn {
      align-content: middle;
      cursor: pointer;
      width: 85%;
      height: 80px;
      margin: 2px auto;
      border-radius: 4px;
      border: 1px solid $blue;
    }
  }
}
</style>
