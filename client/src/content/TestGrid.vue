<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
import AllTrello from '@/components/AllTrello.vue';
import MyTrello from '@/components/MyTrello.vue';
import Message from '@/components/Message.vue';
</script>

<template>
  <div
    class="p-4 w-screen h-full grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:auto-rows-fr"
    role="region"
    aria-labelledby="test-grid"
  >
    <!-- 1: MY WORK -->
    <div
      id="test-grid"
      class="relative border border-[#50A9E4]/30 dark:border-[#6EC0FF]/30 rounded-xl shadow backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 row-span-1 lg:row-span-3 lg:col-span-1 lg:overflow-auto"
      role="gridcell"
    >
      <router-link
        to="/mywork"
        aria-label="Go to My Work"
        class="absolute top-2 right-2 p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50A9E4] hover:bg-white/30 dark:hover:bg-gray-700"
      >
        <ArrowTopRightOnSquareIcon
          class="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
        />
      </router-link>
      <MyTrello />
    </div>

    <!-- 2: NEWSFEED (no link) -->
    <div
      class="relative border border-[#50A9E4]/30 dark:border-[#6EC0FF]/30 rounded-xl shadow backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 row-span-1 lg:row-start-1 lg:col-start-2 lg:overflow-auto"
      role="gridcell"
    >
      <Message />
    </div>

    <!-- 3: PROJECTS -->
    <div
      class="relative border border-[#50A9E4]/30 dark:border-[#6EC0FF]/30 rounded-xl shadow backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 row-span-1 lg:row-start-2 lg:col-start-2 lg:overflow-auto"
      role="gridcell"
    >
      <router-link
        to="/projects"
        aria-label="Go to Projects"
        class="absolute top-2 right-2 p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50A9E4] hover:bg-white/30 dark:hover:bg-gray-700"
      >
        <ArrowTopRightOnSquareIcon
          class="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
        />
      </router-link>
      <AllTrello />
    </div>

    <!-- 4: PLANNING -->
    <div
      class="relative border border-[#50A9E4]/30 dark:border-[#6EC0FF]/30 rounded-xl shadow backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 row-span-1 lg:row-start-3 lg:col-start-2 lg:overflow-auto"
      role="gridcell"
    >
      <router-link
        to="/planning"
        aria-label="Go to Planning"
        class="absolute top-2 right-2 p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50A9E4] hover:bg-white/30 dark:hover:bg-gray-700"
      >
        <ArrowTopRightOnSquareIcon
          class="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
        />
      </router-link>
      <!-- planning content -->
    </div>

    <!-- 5: CLIENTS -->
    <div
      class="relative border border-[#50A9E4]/30 dark:border-[#6EC0FF]/30 rounded-xl shadow backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 row-span-1 lg:row-span-3 lg:col-start-3 lg:overflow-auto"
      role="gridcell"
    >
      <router-link
        to="/clients"
        aria-label="Go to Clients"
        class="absolute top-2 right-2 p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50A9E4] hover:bg-white/30 dark:hover:bg-gray-700"
      >
        <ArrowTopRightOnSquareIcon
          class="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
        />
      </router-link>
      <!-- client content -->
    </div>
  </div>
</template>
