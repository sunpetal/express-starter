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
      class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-[#50A9E4]"
    >
      <div class="min-w-0 flex-1">
        <p class="text-sm font-medium text-gray-900">
          {{ card.name }}
        </p>
      </div>
    </a>
  </div>
</template>
