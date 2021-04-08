<template>
  <img scr="empty.gif" v-bind='srcset(file)' />
</template>

<script>
  module.exports = {
    props: ['file'],
    methods: {
      srcset(file) {
        if(file.thumbnails){
          var srcarray = [];
          var sizes = [];
          Object.keys(file.thumbnails).forEach((id) => {
            srcarray.push( file.thumbnails[id] + ' ' + id.replace('w','')+'w');
            sizes.push('(max-width: '+id.replace('w','') + 'px) '+id.replace('w','')+'px');
          });
          return {
            srcset: srcarray.join(', '),
            sizes: sizes.join(', ')
          }
        }
      }
    }
  }
</script>
