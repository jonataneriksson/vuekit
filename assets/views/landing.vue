<template>
  <main id='Landing'>
    <router-view />
  </main>
</template>

<style scoped>

</style>

<script>
import mixins from '.././mixins.js';

export default {
  mixins: [mixins], //kirby(), urltopath(), etc
}
</script>
