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
    <!-- SEARCH & FILTER AREA -->
    <div class="flex flex-col gap-2 flex-shrink-0">
      <div class="inline-flex items-center justify-between">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">My Tasks, Boards, & Subscriptions</h2>
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

    <!-- MAIN CONTENT -->
    <div class="flex-1 flex flex-col gap-4 overflow-hidden mt-4 min-h-0">
      <!-- TOP 2/3: TASKS + BOARDS -->
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

      <!-- BOTTOM 1/3: SUBSCRIPTIONS -->
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
