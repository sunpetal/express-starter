<script setup lang="ts">
import WelcomeBar from '@/global/WelcomeBar.vue';
import FooterNav from '@/global/FooterNav.vue';
import Background from '@/global/Background.vue';
</script>

<template>
  <div class="h-screen flex flex-col bg-white dark:bg-gray-900 overflow-hidden relative isolate">
    <!-- background sits under all content -->
    <Background />

    <!-- header -->
    <header class="flex-none z-10">
      <WelcomeBar />
    </header>

    <!-- main -->
    <main class="flex-1 overflow-auto z-10">
      <router-view />
    </main>

    <!-- footer -->
    <footer class="flex-none z-10">
      <FooterNav />
    </footer>
  </div>
</template>

<!-- your existing responsive overflow rules can stay in a global or scoped style -->
<style scoped>
@media (min-width: 768px) {
  .h-screen {
    height: 100vh;
  }
  main {
    overflow: auto;
  }
}
@media (max-width: 767px) {
  main {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
