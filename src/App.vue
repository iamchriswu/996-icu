<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app, body {
    color: #fff;
  }
  body {
    background-color: #de335e;
    padding: 40px 0;
  }
  body {
    display: block;
    margin: 8px;
  }
  ul li {
    list-style: none;
  }
  div.content {
    margin: 0 auto;
    max-width: 500px;
    padding: 10px;
    position: relative;
  }
  .markdown-body.override {
    color: #fff;
  }
  .markdown-body.override a {
    color: #fff;
    text-decoration: underline;
  }
  .markdown-body.override blockquote {
    color: #fff;
  }
</style>
