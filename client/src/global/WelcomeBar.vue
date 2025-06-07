<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { BellIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline';
import PalmTree from '@/assets/PalmTree.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

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
  <nav
    class="w-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow border-b-2 border-gray-200/40 dark:border-gray-700 h-16"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <PalmTree class="h-8 w-auto text-[#50A9E4] dark:text-[#48CFAD]" alt="Company Logo" />
        </div>

        <!-- Right icons -->
        <div class="flex items-center space-x-4">
          <!-- Notifications -->
          <Menu as="div" class="relative">
            <MenuButton
              type="button"
              aria-label="View notifications"
              class="relative rounded-full p-1 cursor-pointer text-gray-600 hover:text-[#50A9E4] dark:text-gray-300 dark:hover:text-[#48CFAD] focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-white"
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
                class="absolute right-0 z-50 mt-2 w-80 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 divide-y divide-gray-100 focus:outline-none dark:bg-gray-800 dark:divide-gray-700"
              >
                <!-- header -->
                <div
                  class="w-full p-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-700"
                >
                  <p class="text-md text-gray-700 dark:text-gray-300">Notifications</p>
                  <Cog6ToothIcon
                    class="h-6 w-6 text-gray-700 dark:text-gray-300 cursor-pointer hover:text-[#50A9E4] dark:hover:text-[#48CFAD]"
                  />
                </div>

                <!-- list (max 5 items) -->
                <ul
                  role="list"
                  class="h-auto overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700"
                >
                  <li
                    v-for="notif in notifications.slice(0, 5)"
                    :key="notif.id"
                    class="flex items-center justify-between gap-x-6 py-5 px-4 hover:bg-[#50A9E4]/10 dark:hover:bg-[#48CFAD]/10"
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
                    class="flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#50A9E4]/10 hover:text-[#50A9E4] focus-visible:outline-offset-0 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-[#48CFAD]/10 dark:hover:text-[#48CFAD]"
                  >
                    View all
                  </a>
                  <a
                    href="#"
                    class="flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#50A9E4]/10 hover:text-[#50A9E4] focus-visible:outline-offset-0 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-[#48CFAD]/10 dark:hover:text-[#48CFAD]"
                  >
                    Clear all
                  </a>
                </div>
              </MenuItems>
            </transition>
          </Menu>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative">
            <MenuButton
              class="relative rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-white flex items-center justify-center"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full object-cover border-2 border-[#50A9E4]/30 dark:border-[#48CFAD]/30"
                src="../assets/beachshore.jpg"
                alt="User profile"
              />
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
                class="absolute right-0 z-1000 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 divide-y divide-gray-100 focus:outline-none dark:bg-gray-800 dark:divide-gray-700"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    :class="[
                      active ? 'bg-[#50A9E4]/10 dark:bg-[#48CFAD]/10' : '',
                      'block px-4 py-2 text-sm text-gray-700 hover:text-[#50A9E4] dark:text-gray-300 dark:hover:text-[#48CFAD]',
                    ]"
                    href="#"
                  >
                    Your Profile
                  </a>
                </MenuItem>

                <MenuItem v-slot="{ active }">
                  <a
                    :class="[
                      active ? 'bg-[#50A9E4]/10 dark:bg-[#48CFAD]/10' : '',
                      'block px-4 py-2 text-sm text-gray-700 hover:text-[#50A9E4] dark:text-gray-300 dark:hover:text-[#48CFAD]',
                    ]"
                    href="#"
                  >
                    Settings
                  </a>
                </MenuItem>

                <MenuItem v-slot="{ active }">
                  <button
                    @click="router.push({ name: 'login' })"
                    :class="[
                      active ? 'bg-[#50A9E4]/10 dark:bg-[#48CFAD]/10' : '',
                      'w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-[#50A9E4] dark:text-gray-300 dark:hover:text-[#48CFAD]',
                    ]"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </nav>
</template>
