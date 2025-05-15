<script setup lang="ts">
import { computed } from 'vue';
import { useWelcomeStore } from '@/stores/welcome';
import { api } from '@/utils/api';

const store = useWelcomeStore();
const welcome = computed(() => store.welcome);

async function fetchMessage() {
  try {
    const { data } = await api.get('/');
    store.setWelcome(data.message);
  } catch {
    store.setWelcome('Error fetching data');
  }
}
</script>

<template>
  <div class="text-gray-900 p-4 dark:text-white">
    <h1 class="text-2xl font-semibold mb-2">Newsfeed</h1>

    <!-- monospaced, a bit larger and with some breathing room -->
    <p class="font-mono text-lg mb-4">
      {{ welcome }}
    </p>

    <!-- styled button with your primary blue, focus ring, hover state -->
    <button
      @click="fetchMessage"
      class="inline-flex cursor-pointer items-center px-4 py-2 bg-[#50A9E4] text-white rounded-md shadow-sm hover:bg-[#2E8ECE] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50A9E4] dark:focus:ring-white"
    >
      Fetch from Server
    </button>
  </div>
</template>
