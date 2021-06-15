<template>
  <div id='App'>
    <router-view />
  </div>
</template>

<style>
  @import 'fonts/index.css';

  img.layout {
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
    pointer-events: none;
    opacity: 0.5;
    z-index: -3;
  }


  #App {
    height: 100%;
  }

  html {
    font-size: 12px;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    height: 100%;
  }

  h3 {
    font-size: inherit;
    font-weight: inherit;
  }


  input {
    font-family: inherit;
  }

  button {
    background-color: transparent;
    border: none;
    box-sizing: border-box;
  }

  p {
    font-size: inherit
  }

  big {

  }
</style>
