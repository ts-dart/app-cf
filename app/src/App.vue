<template>
  <HeaderSystem/>
  <AsideSidebar/>
  <main>
    <PageHeader/>
  </main>
</template>

<script>
import AsideSidebar from './components/Aside.vue';
import HeaderSystem from './components/Header.vue';
import PageHeader from './components/PageHeader.vue';

export default {
  name: 'App',
  components: {
    AsideSidebar,
    HeaderSystem,
    PageHeader,
  },
};
</script>

<style>
  @font-face {
    src: url(assets/DMSans-Regular.ttf);
    font-family: 'DMSans-Regular';    
    font-weight: normal;
  }
  body {
    font-family: 'DMSans-Regular';
  }
  main {
    position: absolute;
    left: 336px;
    top: 115px;
    background-color: #FFFFFF;
    width: 1000px;
    height: 215px;
  }
</style>
