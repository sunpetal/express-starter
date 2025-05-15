<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '@/utils/api';
import { Squares2X2Icon, Bars3Icon } from '@heroicons/vue/24/outline';
import SimpleCards from '@/components/SimpleCards.vue';
import SimpleList from '@/components/SimpleList.vue';

interface Card {
  id: string;
  name: string;
  url: string;
}

const viewType = ref<'cards' | 'list'>('cards');
const cards = ref<Card[]>([]);
const BOARD_ID = 'rW0gJRuy';

async function fetchCards() {
  try {
    const { data } = await api.get(`/boards/${BOARD_ID}/cards`);
    cards.value = data;
  } catch (e) {
    console.error('Could not load Trello cards', e);
  }
}

onMounted(fetchCards);
</script>

<template>
  <!-- toggle buttons -->
  <div class="flex space-x-4 my-4">
    <Squares2X2Icon
      @click="viewType = 'cards'"
      :class="[
        viewType === 'cards' ? 'text-[#50A9E4]' : 'text-gray-400',
        'w-6 h-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50A9E4] dark:focus:ring-white',
      ]"
    />
    <Bars3Icon
      @click="viewType = 'list'"
      :class="[
        viewType === 'list' ? 'text-[#50A9E4]' : 'text-gray-400',
        'w-6 h-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50A9E4] dark:focus:ring-white',
      ]"
    />
  </div>

  <!-- conditional render -->
  <div class="m-8">
    <SimpleCards v-if="viewType === 'cards'" :items="cards" />
    <SimpleList v-else :items="cards" />
  </div>
</template>
