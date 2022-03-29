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

  body:before {
    content: 'default';
    display: none;
  }

  :root {
    --main-max-width: 70rem;
    --main-padding: 2rem 2.5rem 1.75rem;
    --columns-or-rows: row;
    --rows-or-columns: column;
    --overlaypadding: 3em 4em 4em;
    --display-or-not: none;
    --thinline: 1px solid rgba(0,0,0,0.5);
    --rootem: 16px;
  }

  @media (-webkit-min-device-pixel-ratio: 2){
    :root {
      --thinline: 1px solid black;
    }
  }

  @media screen and (max-width: 800px) {
    body:before {
      content: 'phone';
      display: none;
    }
    :root {
      --main-max-width: calc(100vw);
      --main-padding: 1.5rem 2.5rem 1.5rem;
      --columns-or-rows: column;
      --rows-or-columns: row;
      --overlaypadding: 4em 3em;
      --display-or-not: none;
      --rootem: 16px;
    }
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

  u {
    text-decoration: none !important;
    padding-bottom: 0.125em;
    background-position: bottom;
    background-repeat: repeat no-repeat;
    background-image: url('data:image/svg+xml;charset=utf8,\
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="1" viewBox="0 0 8 1">\
        <rect x="0" y="0" width="8" height="1" fill="%238eccd1"/>\
      </svg>\
    ');
  }
</style>
