<template>
  <main>
    <h1>{{kirby.page.content.title.value}}</h1>
    {{kirby.page.content.text.value}}
  </main>
</template>

<script>

module.exports = {
  computed: {
    kirby () {
      return this.$store.state.kirby
    }
  },
  methods: {
    fromyaml(input) {
      if(input) return this.$root.yaml(input);
    },
    frommarkdown(input) {
      if(input) return this.$root.markdown(input);
    },
    pagebyuid(uid, pages) {
      if(uid && pages) return this.$root.pagebyuid(uid, pages);
    },
  }
}

</script>


<style>


</style>
