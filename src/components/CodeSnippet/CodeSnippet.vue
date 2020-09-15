<template>
  <pre class="code-snippet">
    <code class="code-snippet__content">
      {{ code }}
    </code>
  </pre>
</template>

<script>
  export default {
    props: {
      code: String
    },
    data() {
      return {
      }
    }
  }
</script>

<style>
  .code-snippet {
    background: #2d2d2d;
    border-radius: 6px;
    -webkit-box-shadow: 10px 10px 19px -4px rgba(0,0,0,0.4);
    -moz-box-shadow: 10px 10px 19px -4px rgba(0,0,0,0.4);
    box-shadow: 10px 10px 19px -4px rgba(0,0,0,0.4);
    overflow: auto;
  }

  .code-snippet__content {
    tab-size: 4;
    color: white;
  }
</style>