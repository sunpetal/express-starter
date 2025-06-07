<script setup lang="ts">
import TopBar from '@/global/TopBar.vue';
import WelcomeBar from '@/global/WelcomeBar.vue';
import FooterNav from '@/global/FooterNav.vue';
import Background from '@/global/Background.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Precise height calculations
const topBarHeight = '2rem'; // 32px
const welcomeBarHeight = '4rem'; // 64px
const footerHeight = '4rem'; // 64px
const totalUsedHeight = `calc(${topBarHeight} + ${welcomeBarHeight} + ${footerHeight})`;
</script>

<template>
  <div class="fixed inset-0 flex flex-col bg-white dark:bg-gray-900 overflow-hidden">
    <Background class="fixed inset-0 -z-10" />

    <!-- Fixed header section -->
    <div class="flex-none">
      <TopBar class="h-8" />
      <WelcomeBar class="h-12" />
    </div>

    <!-- Exactly sized content area -->
    <main
      class="flex-1 overflow-y-scroll lg:overflow-hidden"
      :style="`height: calc(100vh - ${totalUsedHeight});`"
    >
      <router-view class="h-full" />
    </main>

    <!-- Fixed footer -->
    <footer v-if="route.name !== 'login'" class="flex-none h-16">
      <FooterNav />
    </footer>
  </div>
</template>
