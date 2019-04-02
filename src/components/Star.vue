<template>
  <div class="star-container">
    <github-button href="https://github.com/996icu/996.ICU" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</github-button>
  </div>
</template>

<script>
  import GithubButton from 'vue-github-button'
  export default {
    name: "Star",
    components: {
      GithubButton
    }
  }
</script>

<style scoped>
  .star-container {
    text-align: center;
    margin: 20px 0;
  }
</style>
