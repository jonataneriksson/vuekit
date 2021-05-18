<template>
  <main id='Content'>
    <router-view />
    <arrow direction='left' />
  </main>
</template>

<style>

</style>

<script>
import mixins from '.././mixins.js';

export default {
  mixins: [mixins], //kirby(), urltopath(), etc
}
</script>
