<template>
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 12' :style='style'>
    <path d='M11.6,6H0 M8,2.5L11.6,6L8,9.5' />
    <line x1='14.2'
          y1='0'
          x2='14.2'
          y2='12' />
  </svg>
</template>

<style type="text/css">
	svg {
    fill:none;
    stroke:#000000;
    stroke-width:0.75;
    height: 1rem;
    width: 3rem;
  }
</style>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    style: function() {
      var style = '';
      if(this.direction == 'left'){
        style = style + 'transform: scaleX(-1);';
      }
      if(this.direction == 'right'){
        style = style + 'transform: scaleX(1);';
      }
      return style;
    }
  }
}
</script>
