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
    <main class="flex-1 flex flex-col min-h-0 overflow-auto lg:overflow-hidden">
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
/* <= 1023px (md & below): allow vertical scrolling */
@media (max-width: 1023px) {
  main {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}

/* >= 1024px (lg & above): no scrollbars */
@media (min-width: 1024px) {
  main {
    overflow: hidden;
  }
}
</style>
