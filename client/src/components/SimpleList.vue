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
  <ul
    role="list"
    class="divide-y divide-gray-100 dark:divide-gray-700 bg-white/50 dark:bg-gray-900/50 border border-[#50A9E4]/30 dark:border-[#6EC0FF]/30 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl backdrop-blur-sm overflow-hidden"
  >
    <li v-for="card in props.items" :key="card.id">
      <a
        :href="card.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center px-6 py-4 /* spacing so text never hugs edge */ hover:bg-gray-50 dark:hover:bg-gray-800 /* subtle row hover */ focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50A9E4] dark:focus:ring-white"
      >
        <p class="flex-1 text-sm font-semibold text-gray-900 dark:text-gray-200">
          {{ card.name }}
        </p>
      </a>
    </li>
  </ul>
</template>
