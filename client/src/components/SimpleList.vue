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
    class="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
  >
    <li v-for="card in props.items" :key="card.id">
      <a
        :href="card.url"
        target="_blank"
        rel="noopener noreferrer"
        class="relative hover:border-[#50A9E4] hover:border-l flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
      >
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold text-gray-900">
            {{ card.name }}
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>
