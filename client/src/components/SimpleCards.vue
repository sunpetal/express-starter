<script setup lang="ts">
import { defineProps } from 'vue';

interface Card {
  id: string;
  name: string;
  url: string;
}

const props = defineProps<{ items: Card[] }>();
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <a
      v-for="card in props.items"
      :key="card.id"
      :href="card.url"
      target="_blank"
      rel="noopener noreferrer"
      class="relative flex items-center space-x-3 rounded-xl border border-[#50A9E4]/30 dark:border-[#6EC0FF]/30 bg-white/50 dark:bg-gray-900/50 px-6 py-5 shadow backdrop-blur-sm hover:border-[#50A9E4] dark:hover:border-[#50A9E4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50A9E4] dark:focus:ring-white"
    >
      <div class="min-w-0 flex-1">
        <p class="text-sm font-medium text-gray-900 dark:text-gray-200">
          {{ card.name }}
        </p>
      </div>
    </a>
  </div>
</template>
