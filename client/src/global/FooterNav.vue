<script setup lang="ts">
const links = [
  { to: '/one', label: 'One' },
  { to: '/two', label: 'Two' },
  { to: '/', label: 'Home' },
  { to: '/three', label: 'Three' },
  { to: '/four', label: 'Four' },
];
</script>

<template>
  <nav class="w-screen bg-white/80 dark:bg-gray-900/80 px-4 sm:px-6 lg:px-8">
    <div class="flex max-w-3xl h-16 mx-auto justify-between items-center space-x-2">
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
            'flex items-center text-gray-500 cursor-pointer justify-center rounded-md px-3 py-2 text-sm font-medium dark:text-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2',
            isActive
              ? 'dark:text-white text-gray-900 bg-[#50A9E4] hover:bg-[#2E8ECE] focus-visible:outline-[#2E8ECE] dark:hover:bg-[#6EC0FF] dark:focus-visible:outline-[#6EC0FF]'
              : 'border border-[#50A9E4] hover:border-[#2E8ECE] focus-visible:outline-[#2E8ECE] dark:hover:border-[#6EC0FF] dark:focus-visible:outline-[#6EC0FF]',
          ]"
        >
          {{ link.label }}
        </button>
      </router-link>
    </div>
  </nav>
</template>
