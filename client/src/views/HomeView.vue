<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWelcomeStore } from '@/stores/welcome';
import { api } from '@/utils/api';

const store = useWelcomeStore();
const welcome = ref(store.welcome);
const BOARD_ID = 'rW0gJRuy';

const cards = ref<{ id: string; name: string }[]>([]);

async function fetchMessage() {
  try {
    const { data } = await api.get('/');
    welcome.value = data.message;
    store.setWelcome(data.message);
  } catch {
    welcome.value = 'Error fetching data';
  }
}

async function fetchCards() {
  try {
    const { data } = await api.get(`/boards/${BOARD_ID}/cards`);
    cards.value = data;
  } catch {
    console.error('Failed to fetch Trello cards');
  }
}

// Optionally, load cards on mount:
onMounted(fetchCards);
</script>

<template>
  <h1>Home</h1>
  <p>{{ welcome }}</p>
  <button @click="fetchMessage">Fetch from Server</button>

  <h2>Trello Cards</h2>
  <button @click="fetchCards">Reload Cards</button>
  <ul>
    <li v-for="card in cards" :key="card.id">
      {{ card.name }}
    </li>
  </ul>
</template>
