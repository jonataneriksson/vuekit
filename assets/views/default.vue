<template>
  <main id='Default' v-if='kirby.page.template == "default"'>

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
