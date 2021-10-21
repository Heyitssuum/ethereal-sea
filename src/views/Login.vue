<template>
  <main id="app" class="bg-dark" style="background-image: url(https://siasky.net/_ABItEqCaNstAjBsYYdWFlqGTD0mBhA15lzmMVnj2nQWrQ);background-size: cover;">
    <LoginMenu />
  </main>
</template>

<script>
  import LoginMenu from '../components/LoginMenu.vue'

  export default {
    name: 'Login',
    components: {
      LoginMenu
    }
  }
</script>