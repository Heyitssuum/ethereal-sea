<template>
  <div class="d-flex flex-column flex-shrink-0 p-4 text-white bg-dark shadow-lg d-none d-md-flex" style="width: 25%;min-width:600px;">
    <div class="flex-column my-auto p-5">
      <img alt="Vue logo" class="mb-4" src="../assets/logo.png">
      <p class="text-muted">Connect your wallet. You must hold a Wraith NFT to access the Ethereal Sea.</p>
      <button type="button" @click="login()" class="btn w-100 btn-primary mb-3 shadow"><img src="https://cdn.freebiesupply.com/logos/large/2x/metamask-logo-black-and-white.png" width="20" /> Connect with MetaMask</button>
    </div>
    <a href="https://wraithsdao.com/" target="_blank" class="small text-muted ps-5">Powered by Wraiths DAO</a>
  </div>
</template>

<script>
  export default {
    name: 'LoginMenu',
    methods:{
      login(){
        this.$router.push('/yield');
      }
    }
  };
</script>