<template>
  <main id="app" class="bg-dark" style="background-image: url(https://siasky.net/_ABItEqCaNstAjBsYYdWFlqGTD0mBhA15lzmMVnj2nQWrQ);background-size: cover;">
    <MainSideMenu />
    <div class="content">
      <div class="container px-5 py-3">
        <h1 class="mb-4 mt-2">Yield</h1>
        <div class="card bg-dark shadow" style="background-color:#24272a !important">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between mb-3">
              <h5 class="card-title text-primary mb-0">Daily Rewards</h5>
              <button type="button" @click="claimRewards()" class="btn btn-primary" disabled>Claim Rewards</button>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <div>
                <p class="mb-1 text-muted">Token</p>
                <p class="mb-0">$SEA</p>
              </div>
              <div>
                <p class="mb-1 text-muted">Status</p>
                <p class="mb-0">Inactive</p>
              </div>
              <div>
                <p class="mb-1 text-muted">Reward</p>
                <p class="mb-0">TBA</p>
              </div>
              <div>
                <p class="mb-1 text-muted">Accumulated Reward</p>
                <p class="mb-0">-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import MainSideMenu from '../components/MainSideMenu.vue'

  export default {
    name: 'Yield',
    methods:{
      claimRewards(){
        alert("Claiming rewards!");
      }
    },
    components: {
      MainSideMenu
    }
  }
</script>