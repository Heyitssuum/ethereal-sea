<template>
  <div class="d-flex flex-column flex-shrink-0 p-4 text-white bg-dark shadow-lg d-none d-md-flex" style="width: 299px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none mt-2">
      <img alt="Vue logo" src="../assets/logo.png">
    </a>
    <ul class="nav nav-pills flex-column mb-auto mt-4 ps-3 pt-3">
      <li class="nav-item mb-3">
        <a href="#" class="nav-link active" aria-current="page">
          Yield
        </a>
      </li>
      <li class="nav-item mb-3 d-flex justify-content-between">
        <span href="#" class="nav-link text-muted">
          High Council
        </span>
        <span class="small border p-1 border-secondary rounded text-muted" style="padding:0px 0.4rem 0px 0.4rem !important">TBA</span>
      </li>
      <li class="nav-item mb-3 d-flex justify-content-between">
        <span href="#" class="nav-link text-muted">
          PVP/PVE 
        </span>
        <span class="small border p-1 border-secondary rounded text-muted" style="padding:0px 0.4rem 0px 0.4rem !important">TBA</span>
      </li>
      <li class="nav-item mb-3 d-flex justify-content-between">
        <span href="#" class="nav-link text-muted">
          HellForge 
        </span>
        <span class="small border p-1 border-secondary rounded text-muted" style="padding:0px 0.4rem 0px 0.4rem !important">TBA</span>
      </li>
      <li class="nav-item mb-3 d-flex justify-content-between">
        <span href="#" class="nav-link text-muted">
          Bazaar 
        </span>
        <span class="small border p-1 border-secondary rounded text-muted" style="padding:0px 0.4rem 0px 0.4rem !important">TBA</span>
      </li>
    </ul>
    <div class="card bg-dark shadow mb-2" style="background-color: rgb(36, 39, 42) !important;">
      <div class="card-body">
        <div class="dropdown">
          <div class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://lh3.googleusercontent.com/phZWvOCu6iv67Xwpkz5ywQdhN71CzRYnRKyVJ1EVdOLPEqto-3tWgkrV3i2_2BAnS91nEy-MNoYA5q_x08suNKq_NjfIZF6rI1Wc0CQ=w600" alt="" width="52" height="52" class="rounded-circle me-2">
            <div>
              0xc8ef... <span class="text-muted">300 SEA</span>
            </div>
          </div>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item text-muted" href="#">Profile <span class="small border p-1 border-secondary rounded">Soon</span></a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click="logout()">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
    <a href="https://wraithsdao.com/" target="_blank" class="small text-muted">Powered by Wraiths DAO</a>
    
  </div>
</template>

<script>
  export default {
    name: 'MainSideMenu',
    methods:{
      logout(){
        this.$router.push('/');
      }
    }
  }
</script>