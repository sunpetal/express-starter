<script setup lang="ts">
import {
  ClipboardDocumentListIcon,
  Squares2X2Icon,
  HomeIcon,
  UsersIcon,
  ChartBarIcon
} from '@heroicons/vue/24/solid'

const links = [
  { to: '/assignments', label: 'Assignments', icon: ClipboardDocumentListIcon },
  { to: '/masterview', label: 'Master View', icon: Squares2X2Icon },
  { to: '/', label: 'Dashboard', icon: HomeIcon },
  { to: '/teampulse', label: 'Team Pulse', icon: UsersIcon },
  { to: '/metrics', label: 'Metrics', icon: ChartBarIcon },
];
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow border-t-2 border-gray-200/40 dark:border-gray-700 h-16"
    aria-label="Primary navigation"
  >
    <div class="mx-auto w-full max-w-4xl">
      <div class="grid grid-cols-5 h-16">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          custom
          v-slot="{ navigate, isActive }"
          class="flex"
        >
          <button
            @click="navigate"
            :aria-current="isActive ? 'page' : undefined"
            :aria-label="link.label"
            :class="[
              'cursor-pointer flex items-center justify-center w-full text-sm font-medium transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50A9E4] dark:focus:ring-white',
              isActive
                ? 'border-t-2 border-[#50A9E4] dark:border-[#48CFAD] font-semibold bg-[#50A9E4]/10 dark:bg-[#48CFAD]/20 text-[#50A9E4] dark:text-[#48CFAD]'
                : 'text-gray-600 hover:text-[#50A9E4] dark:text-gray-300 dark:hover:text-[#48CFAD]',
            ]"
          >
            <!-- Show icon on small screens -->
            <component
              :is="link.icon"
              class="w-6 h-6 md:hidden"
              aria-hidden="true"
            />
            <!-- Show label on md+ screens -->
            <span class="hidden md:inline">{{ link.label }}</span>
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>
