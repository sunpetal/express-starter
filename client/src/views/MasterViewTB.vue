<!-- assignments -->
<!--
<script setup lang="ts">
import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  PlusIcon,
  ArrowsUpDownIcon,
  MagnifyingGlassIcon,
  RssIcon,
} from '@heroicons/vue/24/outline';

export type TaskItem = {
  status: string;
  title: string;
  description: string;
  due: string;
};

export type BoardItem = {
  title: string;
  description: string;
  tasks: string;
  members: string;
  status: string;
};

export type SubscriptionItem = {
  title: string;
  description: string;
};

const sections: {
  key: 'tasks' | 'boards' | 'subscriptions';
  title: string;
  icon: any;
  items: (TaskItem | BoardItem | SubscriptionItem)[];
}[] = [
  {
    key: 'tasks',
    title: 'My Tasks',
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
    title: 'My Boards',
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
  {
    key: 'subscriptions',
    title: 'My Subscriptions',
    icon: RssIcon,
    items: [
      { title: 'Design Weekly', description: 'Latest design trends and tips' },
      { title: 'Dev Updates', description: 'Programming news and tutorials' },
      { title: 'Analytics Pro', description: 'Data insights and reports' },
      { title: 'Team Digest', description: 'Team updates and announcements' },
    ],
  },
];
</script>

<template>
  <div class="w-full h-full flex flex-col p-4" role="main">
    <div class="flex flex-col gap-2 flex-shrink-0">
      <div class="inline-flex items-center justify-between">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
          My Tasks, Boards, & Subscriptions
        </h2>
        <button type="button" class="inline-flex gap-1 items-center">
          <PlusIcon class="h-4 w-4" aria-hidden="true" />
          Add New
        </button>
      </div>
      <div class="inline-flex gap-4 items-center">
        <div class="inline-flex gap-2 p-1 items-center w-full border">
          <MagnifyingGlassIcon class="h-4 w-4" aria-hidden="true" />
          <input type="search" name="search" aria-label="Search" placeholder="Search" />
        </div>
        <button type="button" class="">
          <ArrowsUpDownIcon class="h-4 w-4" />
        </button>
      </div>
    </div>
    <div class="flex-1 flex flex-col gap-4 overflow-hidden mt-4 min-h-0">
      <div class="flex gap-4 overflow-hidden basis-2/3">
        <template v-for="(section, i) in sections.slice(0, 2)" :key="section.key">
          <div
            :class="['flex flex-col border overflow-hidden', i === 0 ? 'basis-2/3' : 'basis-1/3']"
          >
            <div class="flex items-center gap-2 p-2 border-b">
              <component :is="section.icon" class="h-6 w-6 text-[#50A9E4] dark:text-[#48CFAD]" />
              <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ section.title }} <span>()</span>
              </h2>
            </div>
            <div class="flex-1 overflow-y-auto p-2">
              <template v-if="section.key === 'tasks'">
                <div
                  class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2"
                >
                  <a
                    v-for="task in section.items as TaskItem[]"
                    :key="task.title"
                    href="#"
                    class="border p-2 space-y-2"
                  >
                    <div class="flex items-center justify-between">
                      <div
                        class="rounded-full h-3 w-3 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD]"
                      />
                      <p>{{ task.status }}</p>
                    </div>
                    <div>
                      <p class="font-semibold">{{ task.title }}</p>
                      <p class="text-sm text-gray-600">{{ task.description }}</p>
                    </div>
                    <div class="flex items-center justify-between">
                      <p class="text-sm">{{ task.due }}</p>
                      <div
                        class="rounded-full h-6 w-6 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD]"
                      />
                    </div>
                  </a>
                </div>
              </template>
              <template v-else>
                <div class="grid grid-cols-1 gap-2">
                  <a
                    v-for="board in section.items as BoardItem[]"
                    :key="board.title"
                    href="#"
                    class="border p-2 space-y-2"
                  >
                    <div class="flex items-center gap-2">
                      <div class="h-6 w-6 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD]" />
                      <p class="font-semibold">{{ board.title }}</p>
                    </div>
                    <p class="text-sm text-gray-600">{{ board.description }}</p>
                    <div class="flex items-center justify-between text-xs text-gray-500">
                      <div class="flex gap-1">
                        <p>{{ board.tasks }}</p>
                        <span>•</span>
                        <p>{{ board.members }}</p>
                      </div>
                      <p>{{ board.status }}</p>
                    </div>
                  </a>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
      <div class="flex flex-col border overflow-hidden basis-1/3">
        <div class="flex items-center gap-2 p-2 border-b">
          <RssIcon class="h-6 w-6 text-[#50A9E4] dark:text-[#48CFAD]" />
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
            Subscriptions <span>()</span>
          </h2>
        </div>
        <div class="flex-1 overflow-y-auto p-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-2">
            <a
              v-for="sub in sections.find((s) => s.key === 'subscriptions')
                ?.items as SubscriptionItem[]"
              :key="sub.title"
              href="#"
              class="border p-2 space-y-2"
            >
              <div class="flex items-center gap-2">
                <div class="h-6 w-6 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD]" />
                <p class="font-semibold">{{ sub.title }}</p>
              </div>
              <p class="text-sm text-gray-600">{{ sub.description }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
-->
<!-- master view l/r -->
<!--
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
  <div class="p-4 w-full h-full flex flex-col overflow-hidden lg:pb-4" role="main">
    <div class="flex flex-col gap-2 flex-shrink-0">
      <div class="inline-flex items-center justify-between">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">All Tasks & Boards</h2>
        <button type="button" class="inline-flex gap-1 items-center">
          <PlusIcon class="h-4 w-4" aria-hidden="true" />
          Add New
        </button>
      </div>
      <div class="inline-flex gap-4 items-center">
        <div class="inline-flex gap-2 p-1 items-center w-full border">
          <MagnifyingGlassIcon class="h-4 w-4" aria-hidden="true" />
          <input type="search" name="search" aria-label="Search" placeholder="Search" />
        </div>
        <button type="button" class="">
          <ArrowsUpDownIcon class="h-4 w-4" />
        </button>
      </div>
      <div class="inline-flex items-center">
        <button
          type="button"
          @click="toggleFilter('tasks')"
          :class="activeFilters.includes('tasks') ? 'border bg-gray-100' : 'border opacity-50'"
          class="px-2 py-1"
        >
          Tasks
        </button>
        <button
          type="button"
          @click="toggleFilter('boards')"
          :class="activeFilters.includes('boards') ? 'border bg-gray-100' : 'border opacity-50'"
          class="px-2 py-1"
        >
          Boards
        </button>
      </div>
    </div>
    <div class="flex-1 flex flex-row gap-4 mt-4 overflow-hidden">
      <template v-for="section in sections" :key="section.key">
        <div
          v-if="activeFilters.includes(section.key)"
          :class="[
            'flex flex-col border overflow-hidden transition-all duration-300 ease-in-out',
            activeFilters.length === 1
              ? 'basis-full'
              : section.key === 'tasks'
                ? 'basis-2/3'
                : 'basis-1/3',
          ]"
        >
          <div class="flex items-center gap-2 p-2 border-b">
            <component :is="section.icon" class="h-8 w-8 text-[#50A9E4] dark:text-[#48CFAD]" />
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ section.title }}
              <span>()</span>
            </h2>
          </div>
          <div class="flex-1 overflow-y-auto p-2">
            <div
              :class="[
                'gap-2 grid',
                section.key === 'tasks'
                  ? 'grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
                  : 'grid-cols-1',
              ]"
              role="list"
            >
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
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
</style>
-->

<script setup lang="ts"></script>
<template></template>
