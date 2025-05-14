<template>
  <h1>Home</h1>
  <p>{{ welcome }}</p>
  <button @click="fetchMessage">Fetch from Server</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useWelcomeStore } from '@/stores/welcome';
import { api } from '@/utils/api';

const store = useWelcomeStore();
const welcome = ref(store.welcome);

async function fetchMessage() {
  try {
    const { data } = await api.get('/');
    welcome.value = data.message;
    store.setWelcome(data.message);
  } catch {
    welcome.value = 'Error fetching data';
  }
}
</script>
