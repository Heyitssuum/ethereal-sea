<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

  body{
    font-family: 'VT323', monospace;
    font-size: 1.25rem;
    color:#ececec;
  }

  main {
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
    max-height: 100vh;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .content{
    width:100%; 
    height:100%;
    overflow-y:auto;
  }

  .border-end {
      border-right: 1px solid #585b5e!important;
  }

  .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #ececec;
    background-color: #161511;
  }

  .nav-link {
    padding:0 !important;
  }

  .nav-pills .nav-link.active, .nav-pills .show>.nav-link{
    border-bottom: 2px solid #31744f;
    background-color: transparent;
  }

  .nav-pills .nav-link{
    border-radius:0 !important;
  }
  
  .text-primary{
    color: #31744f !important;
  }

  .btn-primary {
    color: #fff;
    background-color: #31744f;
    border-color: #31744f;
  }

  .btn-primary:hover, .btn-primary:active {
    color: #fff;
    background-color: #2b6043;
    border-color: #2b6043;
  }

  .btn-check:focus+.btn-primary, .btn-primary:focus {
    color: #fff;
    background-color: #2b6043;
    border-color: #2b6043;
    box-shadow: 0 0 0 0.25rem rgb(49 116 79 / 50%);
  }

  .btn-primary.disabled, .btn-primary:disabled {
    color: #fff;
    background-color: #31744f;
    border-color: #31744f;
  }
</style>
