<script setup lang="ts">
import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  PlusIcon,
  ArrowsUpDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline';
import { ref } from 'vue';

type FilterType = 'tasks' | 'boards';

type TaskItem = {
  status: string;
  title: string;
  description: string;
  due: string;
};

type BoardItem = {
  title: string;
  description: string;
  tasks: string;
  members: string;
  status: string;
};

type SectionItem = TaskItem | BoardItem;

const activeFilters = ref<FilterType[]>(['tasks', 'boards']);

const toggleFilter = (filter: FilterType) => {
  const isActive = activeFilters.value.includes(filter);
  if (isActive && activeFilters.value.length > 1) {
    activeFilters.value = activeFilters.value.filter((f) => f !== filter);
  } else if (!isActive) {
    activeFilters.value.push(filter);
  }
};

const sections: {
  key: FilterType;
  title: string;
  icon: any;
  items: SectionItem[];
}[] = [
  {
    key: 'tasks',
    title: 'Tasks',
    icon: BriefcaseIcon,
    items: [
      {
        status: 'High Priority',
        title: 'Website Redesign',
        description: 'Complete homepage redesign with new branding',
        due: 'Due tomorrow',
      },
      {
        status: 'Medium',
        title: 'API Integration',
        description: 'Integrate third-party payment API',
        due: 'Due in 3 days',
      },
      {
        status: 'Low',
        title: 'User Testing',
        description: 'Conduct usability testing sessions',
        due: 'Due next week',
      },
      {
        status: 'In Progress',
        title: 'Database Migration',
        description: 'Migrate legacy database to new system',
        due: 'Due in 5 days',
      },
      {
        status: 'Review',
        title: 'Security Audit',
        description: 'Complete security assessment',
        due: 'Due in 1 week',
      },
      {
        status: 'Pending',
        title: 'Mobile App Update',
        description: 'Release version 2.1 with new features',
        due: 'Due in 2 weeks',
      },
    ],
  },
  {
    key: 'boards',
    title: 'Boards',
    icon: BuildingOffice2Icon,
    items: [
      {
        title: 'Product Development',
        description: 'Main product development workflow',
        tasks: '31 tasks',
        members: '5 members',
        status: 'Active',
      },
      {
        title: 'Marketing Campaign',
        description: 'Q1 marketing initiatives and campaigns',
        tasks: '18 tasks',
        members: '6 members',
        status: 'Active',
      },
      {
        title: 'Client Projects',
        description: 'External client work and deliverables',
        tasks: '12 tasks',
        members: '4 members',
        status: 'On Hold',
      },
      {
        title: 'Bug Tracking',
        description: 'Bug reports and issue resolution',
        tasks: '31 tasks',
        members: '5 members',
        status: 'Active',
      },
      {
        title: 'Research & Development',
        description: 'Innovation and research projects',
        tasks: '9 tasks',
        members: '3 members',
        status: 'Planning',
      },
      {
        title: 'HR & Operations',
        description: 'Human resources and operational tasks',
        tasks: '15 tasks',
        members: '7 members',
        status: 'Active',
      },
    ],
  },
];
</script>

<template>
  <div class="p-4 w-full h-full flex flex-col lg:pb-4" role="main">
    <!-- SEARCH & FILTER AREA -->
    <div class="flex flex-col border flex-shrink-0">
      <div class="inline-flex items-center justify-between border">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Tasks & Boards</h2>
        <button type="button" class="inline-flex items-center border">
          <PlusIcon class="h-4 w-4" aria-hidden="true" />
          Add New
        </button>
      </div>
      <div class="inline-flex items-center border">
        <div class="inline-flex items-center w-full">
          <MagnifyingGlassIcon class="h-4 w-4" aria-hidden="true" />
          <input type="search" name="search" aria-label="Search" placeholder="Search" />
        </div>
        <button type="button">
          <ArrowsUpDownIcon class="h-4 w-4" />
        </button>
      </div>
      <div class="inline-flex items-center">
        <button
          type="button"
          @click="toggleFilter('tasks')"
          :class="activeFilters.includes('tasks') ? 'border bg-blue-100' : 'border opacity-50'"
          class="px-2 py-1"
        >
          Tasks
        </button>
        <button
          type="button"
          @click="toggleFilter('boards')"
          :class="activeFilters.includes('boards') ? 'border bg-blue-100' : 'border opacity-50'"
          class="px-2 py-1"
        >
          Boards
        </button>
      </div>
    </div>

    <!-- TASKS & BOARDS AREA (now flex-row!) -->
    <div class="flex-1 flex flex-row gap-4 mt-4">
      <template v-for="section in sections" :key="section.key">
        <div
          v-if="activeFilters.includes(section.key)"
          class="flex-1 flex flex-col border overflow-hidden"
        >
          <div class="flex items-center gap-2 p-2 border-b">
            <component :is="section.icon" class="h-8 w-8 text-[#50A9E4] dark:text-[#48CFAD]" />
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ section.title }}
              <span>()</span>
            </h2>
          </div>
          <div class="flex-1 overflow-y-auto p-2">
            <div class="border grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
              <template v-if="section.key === 'tasks'">
                <a
                  v-for="item in section.items"
                  :key="item.title"
                  href="#"
                  role="button"
                  class="border"
                  aria-labelledby=""
                >
                  <div class="flex items-center justify-between">
                    <div
                      class="rounded-full h-3 w-3 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD]"
                    ></div>
                    <p>{{ (item as TaskItem).status }}</p>
                  </div>
                  <div>
                    <p>{{ item.title }}</p>
                    <p>{{ item.description }}</p>
                  </div>
                  <div class="flex items-center justify-between">
                    <p>{{ (item as TaskItem).due }}</p>
                    <div
                      class="rounded-full h-6 w-6 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD]"
                    ></div>
                  </div>
                </a>
              </template>
              <template v-else>
                <a
                  v-for="item in section.items"
                  :key="item.title"
                  href="#"
                  role="button"
                  class="border"
                  aria-labelledby=""
                >
                  <div class="inline-flex items-center">
                    <div class="h-6 w-6 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD]"></div>
                    <p>{{ item.title }}</p>
                  </div>
                  <p>{{ item.description }}</p>
                  <div class="flex items-center justify-between">
                    <div
                      class="inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                    >
                      <p>{{ (item as BoardItem).tasks }}</p>
                      <span>•</span>
                      <p>{{ (item as BoardItem).members }}</p>
                    </div>
                    <p>{{ (item as BoardItem).status }}</p>
                  </div>
                  <div
                    class="rounded-full h-6 w-6 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD]"
                  ></div>
                </a>
              </template>
            </div>
          </div>
        </div>
      </template>

      <!-- EMPTY STATE -->
      <div
        v-if="activeFilters.length === 0"
        class="flex flex-col items-center justify-center flex-1 text-gray-500 border"
      >
        <p class="text-lg">No filters selected</p>
        <p class="text-sm">Select at least one filter to view content</p>
      </div>
    </div>
  </div>
</template>

<style>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
