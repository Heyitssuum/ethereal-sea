<template>
  <div class="d-flex flex-column flex-shrink-0 p-4 text-white bg-dark shadow-lg d-none d-md-flex" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <img alt="Vue logo" src="../assets/logo.png">
    </a>
    <ul class="nav nav-pills flex-column mb-auto mt-4 ps-3 pt-3">
      <li class="nav-item mb-2">
        <a href="#" class="nav-link active" aria-current="page">
          Yield
        </a>
      </li>
      <li class="nav-item mb-2">
        <a href="#" class="nav-link text-muted">
          High Council <span class="small border p-1 border-secondary rounded">Soon</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-muted">
          PVP/PVE <span class="small border p-1 border-secondary rounded">Soon</span>
        </a>
      </li>
    </ul>
    <div class="card bg-dark shadow" style="background-color: rgb(36, 39, 42) !important;">
      <div class="card-body">
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://lh3.googleusercontent.com/phZWvOCu6iv67Xwpkz5ywQdhN71CzRYnRKyVJ1EVdOLPEqto-3tWgkrV3i2_2BAnS91nEy-MNoYA5q_x08suNKq_NjfIZF6rI1Wc0CQ=w600" alt="" width="52" height="52" class="rounded-circle me-2">
            SUM.ETH
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item text-muted" href="#">Profile <span class="small border p-1 border-secondary rounded">Soon</span></a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click="logout()">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
    
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