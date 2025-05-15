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
  <h1>Home</h1>
  <p>{{ welcome }}</p>
  <button @click="fetchMessage">Fetch from Server</button>
</template>
