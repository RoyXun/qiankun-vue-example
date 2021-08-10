<template>
  <div>
    <h3>Sub app - page nest</h3>
    <button @click="push('/a/b/c/')">to main home</button> <br>
    <img src="../assets/sub-logo.png" />
  </div>
</template>

<script>
  export default {
    methods: {
      push(url) {
        history.pushState(null, "", url);
      },
    },
  };
</script>
