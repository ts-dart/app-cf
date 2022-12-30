<template>
  <HeaderSystem/>
  <AsideSidebar/>
</template>

<script>
import AsideSidebar from './components/Aside.vue';
import HeaderSystem from './components/Header.vue';

export default {
  name: 'App',
  components: {
    AsideSidebar,
    HeaderSystem,
  },
};
</script>

<style></style>
