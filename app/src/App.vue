<template>
  <HeaderSystem/>
  <AsideSidebar/>
  <main>
    <PageHeader/>
    <ContentTable/>
  </main>
</template>

<script>
import AsideSidebar from './components/Aside.vue';
import HeaderSystem from './components/Header.vue';
import PageHeader from './components/PageHeader.vue';
import ContentTable from './components/ContentTable';

export default {
  name: 'App',
  components: {
    AsideSidebar,
    HeaderSystem,
    PageHeader,
    ContentTable,
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
    left: 355px;
    top: 115px;
    background-color: #FFFFFF;
    width: 1000px;
  }
</style>
