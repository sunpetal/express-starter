<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '@/utils/api';
import { Squares2X2Icon, Bars3Icon } from '@heroicons/vue/24/outline';
import SimpleCards from '@/components/SimpleCards.vue';
import SimpleList from '@/components/SimpleList.vue';

const viewType = ref<'cards' | 'list'>('cards');
const cards = ref<{ id: string; name: string }[]>([]);
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
  <h1>About</h1>
  <p>This is the about page.</p>

  <!-- toggle buttons -->
  <div class="flex space-x-4 my-4">
    <Squares2X2Icon
      @click="viewType = 'cards'"
      :class="viewType === 'cards' ? 'text-[#50A9E4]' : 'text-gray-400'"
      class="w-6 h-6 cursor-pointer"
    />
    <Bars3Icon
      @click="viewType = 'list'"
      :class="viewType === 'list' ? 'text-[#50A9E4]' : 'text-gray-400'"
      class="w-6 h-6 cursor-pointer"
    />
  </div>

  <!-- conditional render -->
  <div class="m-8">
    <SimpleCards v-if="viewType === 'cards'" :items="cards" />
    <SimpleList v-else :items="cards" />
  </div>
</template>
