<template>
  <div>
    <svg class='arrow'
         :style='style'
         version='1.1'
         xmlns='http://www.w3.org/2000/svg'
         x='0px'
         y='0px'
         viewBox='0 0 45 35'>
      <polygon class='arrow' points='26.9,0 25,1.8 39.8,16.1 0,16.1 0,18.9 39.8,18.9 25,33.2 26.9,35 45,17.5 ' />
    </svg>
  </div>
</template>

<style type="text/css">
  polygon.arrow {
    fill: #ff5100;
  }

  svg.arrow {
    position: relative;
    bottom: -0.35rem;
    width: 3rem;
    height: 2.65rem;
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
