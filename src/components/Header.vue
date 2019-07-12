<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="red">
      <b-navbar-brand href="#">
        <img :src="require('../assets/img/logo-uello-branco.png')" alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto d-flex align-items-center justify-content-center flex-row">
          <span class="app_uello__circle"></span><h5 class="app_uello__client-name text-white text-uppercase">Michelon Souza</h5>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.bg-red {
  background-color: #e63b4f;
  padding-top: 9px;
  padding-bottom: 9px;

  .navbar-brand > img {
    height: 50px;
  }

  .app_uello__circle {
    height: 35px;
    width: 35px;
    display: block;
    background: #fff;
    border-radius: 50%;
    margin-right: 10px;
  }
  .app_uello__client-name {
    margin: 0;
  }
}
</style>
