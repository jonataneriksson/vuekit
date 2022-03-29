<template>
  <main id='Intro' v-if='kirby.page.template'>
    {{kirby}}
  </main>
</template>

<script>
import mixins from '.././mixins.js';

export default {
  mixins: [mixins], //kirby(), urltopath(), etc
}
</script>


<style scoped>

</style>
