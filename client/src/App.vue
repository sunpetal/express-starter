<!-- src/App.vue -->
<script setup lang="ts">
import TopBar from '@/global/TopBar.vue';
import WelcomeBar from '@/global/WelcomeBar.vue';
import FooterNav from '@/global/FooterNav.vue';
import Background from '@/global/Background.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="h-screen flex flex-col bg-white dark:bg-gray-900 overflow-hidden relative isolate">
    <!-- background sits under all content -->
    <Background />

    <!-- TopBar stays visible always -->
    <TopBar />

    <!-- WelcomeBar stays visible always -->
    <header class="flex-none z-10">
      <WelcomeBar />
    </header>

    <!-- main section: will hold either Dashboard (etc.) or Login -->
    <main class="flex-1 flex flex-col min-h-0 overflow-auto relative">
      <router-view />
    </main>

    <!-- Footer: only show when NOT on /login -->
    <footer v-if="route.name !== 'login'" class="flex-none z-10">
      <FooterNav />
    </footer>
  </div>
</template>
