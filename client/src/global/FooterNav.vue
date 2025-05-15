<script setup lang="ts">
const links = [
  { to: '/mywork', label: 'My Work' },
  { to: '/projects', label: 'Projects' },
  { to: '/', label: 'Dashboard' },
  { to: '/planning', label: 'Planning' },
  { to: '/clients', label: 'Clients' },
];
</script>

<template>
  <nav
    class="w-screen bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-3xl mx-auto h-16 flex items-center justify-between space-x-2">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        custom
        v-slot="{ navigate, isActive }"
      >
        <button
          @click="navigate"
          :aria-current="isActive ? 'page' : undefined"
          :class="[
            'flex cursor-pointer items-center justify-center rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
            isActive
              ? 'bg-[#50A9E4] text-white focus:ring-[#2E8ECE]'
              : 'text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white focus:ring-[#50A9E4] dark:focus:ring-white',
          ]"
        >
          {{ link.label }}
        </button>
      </router-link>
    </div>
  </nav>
</template>
