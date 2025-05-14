<!-- src/components/WelcomeBar.vue -->
<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { BellIcon, Cog6ToothIcon, UserIcon } from '@heroicons/vue/24/outline';
import PalmTree from '../assets/PalmTree.vue';

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const notifications = [
  {
    id: 1,
    title: 'New comment on your post',
    description: 'Alice: "Great work on the UI!"',
    time: 'Just now',
  },
  {
    id: 2,
    title: 'Server downtime alert',
    description: 'Server #3 has been restarted',
    time: '30m ago',
  },
  {
    id: 3,
    title: 'New follower',
    description: 'Bob started following you',
    time: '2h ago',
  },
];
</script>

<template>
  <nav class="w-screen bg-white/50 dark:bg-gray-900/50 shadow">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="dark:border-b border-gray-700">
        <div class="flex h-16 justify-between items-center">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <PalmTree class="h-8 w-auto text-[#50A9E4]" alt="Your Company Logo" />
          </div>

          <!-- Right icons -->
          <div class="flex items-center space-x-4">
            <!-- Notifications -->
            <Menu as="div" class="relative">
              <MenuButton
                type="button"
                aria-label="View notifications"
                class="relative rounded-full p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-400 hover:text-gray-500 focus:ring-[#50A9E4] dark:hover:text-white dark:focus:ring-white dark:focus:ring-offset-gray-800"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800"
                >
                  <!-- header -->
                  <div
                    class="w-full p-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-700"
                  >
                    <p class="text-md text-gray-700 dark:text-gray-300">Notifications</p>
                    <Cog6ToothIcon
                      class="h-6 w-6 text-gray-700 dark:text-gray-300 cursor-pointer"
                    />
                  </div>

                  <!-- list (max 5 items) -->
                  <ul
                    role="list"
                    class="max-h-60 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700"
                  >
                    <li
                      v-for="notif in notifications.slice(0, 5)"
                      :key="notif.id"
                      class="flex items-center justify-between gap-x-6 py-5 px-4"
                    >
                      <div class="min-w-0">
                        <div class="flex items-start gap-x-3">
                          <p class="text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
                            {{ notif.title }}
                          </p>
                        </div>
                        <div
                          class="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500 dark:text-gray-400"
                        >
                          <p class="truncate">{{ notif.description }}</p>
                          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                            <circle cx="1" cy="1" r="1" />
                          </svg>
                          <p class="whitespace-nowrap">{{ notif.time }}</p>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <!-- action buttons -->
                  <div class="px-4 py-3 grid grid-cols-2 gap-2">
                    <a
                      href="#"
                      class="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                    >
                      View all
                    </a>
                    <a
                      href="#"
                      class="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                    >
                      Clear all
                    </a>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <div>
                <MenuButton
                  class="cursor-pointer relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#50A9E4] focus:ring-offset-2"
                >
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img class="size-8 rounded-full" src="../assets/beachshore.jpg" alt="" />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                >
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-100 outline-none' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
