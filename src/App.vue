<template>
  <div id="app-root">
    <NavigationBar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue'
</script>

<style scoped>
#app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
