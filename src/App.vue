
<template>
  <Navbar :logo="logo_src" :alt="app_name" />
  <RouterView />
  <Footer />
</template>


<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const logo_src = "../dist/img/logo.png";
const app_name = "Make Your Burger";


</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
