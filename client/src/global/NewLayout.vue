<script setup lang="ts">
import {
  FaceSmileIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentListIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  LightBulbIcon,
  RssIcon,
  NewspaperIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline';
</script>

<template>
  <div
    class="p-4 w-full grid grid-cols-1 gap-4 pb-4 lg:grid-cols-6 lg:grid-rows-[minmax(180px,200px)_auto_minmax(0,1fr)_minmax(200px,220px)] lg:h-full lg:pb-4"
    role="main"
    aria-label="Dashboard overview"
  >
    <!-- 1: WELCOME -->
    <div
      class="border dark:border-2 border-[#50A9E4]/30 dark:border-[#48CFAD]/30 rounded-xl shadow backdrop-blur-sm bg-white/50 dark:bg-gray-900/20 lg:col-span-4"
      role="region"
      aria-label="Welcome and summary"
    >
      <div class="flex flex-col p-4 h-full justify-between">
        <!-- Top Section -->
        <div class="flex flex-col gap-2">
          <div class="inline-flex items-center gap-2">
            <FaceSmileIcon class="h-8 w-8 text-[#50A9E4] dark:text-[#48CFAD]" aria-hidden="true" />
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              Welcome back, <span class="font-bold">Cassidy</span>!
            </h2>
          </div>
          <p class="text-gray-900 dark:text-white">
            Here's what's happening with your projects today.
          </p>
        </div>

        <!-- Bottom Stats -->
        <div class="grid grid-cols-2 gap-4 mt-4" role="group" aria-label="Project statistics">
          <div
            class="rounded-xl bg-[#6EC0FF]/20 dark:bg-[#48CFAD]/80 flex flex-col justify-center p-3"
            role="status"
            aria-label="Active projects count"
          >
            <div class="text-xl text-gray-900 dark:text-white font-bold">12</div>
            <div class="text-sm text-gray-900 dark:text-white">Active Projects</div>
          </div>
          <div
            class="rounded-xl bg-[#6EC0FF]/20 dark:bg-[#48CFAD]/80 flex flex-col justify-center p-3"
            role="status"
            aria-label="Completed tasks count"
          >
            <div class="text-xl text-gray-900 dark:text-white font-bold">28</div>
            <div class="text-sm text-gray-900 dark:text-white">Tasks Completed</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2: RECENT ACTIVITY -->
    <div
      class="border dark:border-2 border-[#50A9E4]/30 dark:border-[#48CFAD]/30 rounded-xl shadow backdrop-blur-sm bg-white/50 dark:bg-gray-900/20 lg:col-span-2"
      role="region"
      aria-label="Recent activity"
    >
      <div class="flex flex-col p-4 h-full">
        <!-- Header Section -->
        <div class="flex items-center justify-between">
          <div class="inline-flex items-center gap-2">
            <ClipboardDocumentListIcon
              class="h-8 w-8 text-[#50A9E4] dark:text-[#48CFAD]"
              aria-hidden="true"
            />
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
          </div>
          <button
            class="text-[#50A9E4] dark:text-[#48CFAD] hover:text-[#3a8bc8] dark:hover:text-[#3cba9d] focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD] rounded-full p-1"
            aria-label="View all recent activity"
          >
            <ArrowTopRightOnSquareIcon class="h-5 w-5" />
          </button>
        </div>

        <!-- Activity List -->
        <ul class="space-y-4 pl-5 mt-4" role="list" aria-label="Recent activity items">
          <li
            class="relative pl-4"
            role="listitem"
            aria-labelledby="activity-1-title activity-1-time"
          >
            <div
              class="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#50A9E4] dark:bg-[#48CFAD]"
            ></div>
            <p id="activity-1-title" class="text-gray-900 dark:text-white font-medium">
              Project Alpha updated
            </p>
            <p id="activity-1-time" class="text-sm text-gray-600 dark:text-gray-400">2 hours ago</p>
          </li>
          <li
            class="relative pl-4"
            role="listitem"
            aria-labelledby="activity-2-title activity-2-time"
          >
            <div
              class="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#50A9E4] dark:bg-[#48CFAD]"
            ></div>
            <p id="activity-2-title" class="text-gray-900 dark:text-white font-medium">
              New task assigned
            </p>
            <p id="activity-2-time" class="text-sm text-gray-600 dark:text-gray-400">4 hours ago</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 3: MY TASKS -->
    <div
      class="border dark:border-2 border-[#50A9E4]/30 dark:border-[#48CFAD]/30 rounded-xl shadow backdrop-blur-sm bg-white/50 dark:bg-gray-900/20 lg:row-span-2 lg:col-span-2"
      role="region"
      aria-label="My tasks"
    >
      <div class="flex flex-col p-4 h-full">
        <div class="flex items-center justify-between">
          <div class="inline-flex items-center gap-2">
            <BriefcaseIcon class="h-8 w-8 text-[#50A9E4] dark:text-[#48CFAD]" aria-hidden="true" />
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">My Tasks</h2>
          </div>
          <button
            class="text-[#50A9E4] dark:text-[#48CFAD] hover:text-[#3a8bc8] dark:hover:text-[#3cba9d] focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD] rounded-full p-1"
            aria-label="View all tasks"
          >
            <ArrowTopRightOnSquareIcon class="h-5 w-5" />
          </button>
        </div>

        <div class="space-y-3 mt-4" role="list" aria-label="Task list">
          <a
            href="#"
            role="button"
            class="rounded-xl bg-gray-200/30 dark:bg-gray-700/30 w-full flex items-center p-3 hover:bg-[#6EC0FF]/20 dark:hover:bg-[#48CFAD]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD]"
            aria-labelledby="task-1-title task-1-due"
          >
            <div
              class="rounded-full h-3 w-3 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD] mr-3"
            ></div>
            <div class="text-left flex-grow">
              <p id="task-1-title" class="text-gray-900 dark:text-white mb-1 font-medium truncate">
                Website Redesign
              </p>
              <p id="task-1-due" class="text-xs text-gray-600 dark:text-gray-400">Due tomorrow</p>
            </div>
          </a>

          <a
            href="#"
            role="button"
            class="rounded-xl bg-gray-200/30 dark:bg-gray-700/30 w-full flex items-center p-3 hover:bg-[#6EC0FF]/20 dark:hover:bg-[#48CFAD]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD]"
            aria-labelledby="task-2-title task-2-due"
          >
            <div
              class="rounded-full h-3 w-3 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD] mr-3"
            ></div>
            <div class="text-left flex-grow">
              <p id="task-2-title" class="text-gray-900 dark:text-white mb-1 font-medium truncate">
                API Integrations
              </p>
              <p id="task-2-due" class="text-xs text-gray-600 dark:text-gray-400">Due in 3 days</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- 4: MY CLIENTS -->
    <div
      class="border dark:border-2 border-[#50A9E4]/30 dark:border-[#48CFAD]/30 rounded-xl shadow backdrop-blur-sm bg-white/50 dark:bg-gray-900/20 lg:row-span-2 lg:col-span-2"
      role="region"
      aria-label="My clients"
    >
      <div class="flex flex-col p-4 h-full">
        <div class="flex items-center justify-between">
          <div class="inline-flex items-center gap-2">
            <BuildingOffice2Icon
              class="h-8 w-8 text-[#50A9E4] dark:text-[#48CFAD]"
              aria-hidden="true"
            />
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">My Clients</h2>
          </div>
          <button
            class="text-[#50A9E4] dark:text-[#48CFAD] hover:text-[#3a8bc8] dark:hover:text-[#3cba9d] focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD] rounded-full p-1"
            aria-label="View all clients"
          >
            <ArrowTopRightOnSquareIcon class="h-5 w-5" />
          </button>
        </div>

        <div class="space-y-3 mt-4" role="list" aria-label="Client list">
          <a
            href="#"
            role="button"
            class="rounded-xl bg-gray-200/30 dark:bg-gray-700/30 w-full flex items-center p-3 hover:bg-[#6EC0FF]/20 dark:hover:bg-[#48CFAD]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD]"
            aria-labelledby="client-1-title client-1-stats"
          >
            <div class="flex flex-col gap-1 text-left">
              <div class="inline-flex items-center">
                <div class="h-3 w-3 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD] mr-3"></div>
                <p id="client-1-title" class="text-gray-900 dark:text-white font-medium truncate">
                  Product Development
                </p>
              </div>
              <div class="inline-flex items-center gap-2">
                <p class="text-xs text-gray-600 dark:text-gray-400">8 tasks</p>
                <span class="text-xs text-gray-600 dark:text-gray-400">•</span>
                <p class="text-xs text-gray-600 dark:text-gray-400">3 members</p>
              </div>
            </div>
          </a>

          <a
            href="#"
            role="button"
            class="rounded-xl bg-gray-200/30 dark:bg-gray-700/30 w-full flex items-center p-3 hover:bg-[#6EC0FF]/20 dark:hover:bg-[#48CFAD]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD]"
            aria-labelledby="client-2-title client-2-stats"
          >
            <div class="flex flex-col gap-1 text-left">
              <div class="inline-flex items-center">
                <div class="h-3 w-3 flex-shrink-0 bg-[#50A9E4] dark:bg-[#48CFAD] mr-3"></div>
                <p id="client-2-title" class="text-gray-900 dark:text-white font-medium truncate">
                  Marketing Campaign
                </p>
              </div>
              <div class="inline-flex items-center gap-2">
                <p class="text-xs text-gray-600 dark:text-gray-400">12 tasks</p>
                <span class="text-xs text-gray-600 dark:text-gray-400">•</span>
                <p class="text-xs text-gray-600 dark:text-gray-400">5 members</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- 5: PLANNING -->
    <div
      class="border dark:border-2 border-[#50A9E4]/30 dark:border-[#48CFAD]/30 rounded-xl shadow backdrop-blur-sm bg-white/50 dark:bg-gray-900/20 lg:row-span-2 lg:col-span-2"
      role="region"
      aria-label="Planning items"
    >
      <div class="flex flex-col p-4 h-full">
        <div class="flex items-center justify-between">
          <div class="inline-flex items-center gap-2">
            <LightBulbIcon class="h-8 w-8 text-[#50A9E4] dark:text-[#48CFAD]" aria-hidden="true" />
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Planning</h2>
          </div>
          <button
            class="text-[#50A9E4] dark:text-[#48CFAD] hover:text-[#3a8bc8] dark:hover:text-[#3cba9d] focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD] rounded-full p-1"
            aria-label="View all planning items"
          >
            <ArrowTopRightOnSquareIcon class="h-5 w-5" />
          </button>
        </div>

        <div class="space-y-3 mt-4" role="list" aria-label="Planning items list">
          <a
            href="#"
            role="button"
            class="border-l-4 border-[#50A9E4] dark:border-[#48CFAD] rounded-r-xl w-full flex items-center p-3 hover:bg-[#6EC0FF]/20 dark:hover:bg-[#48CFAD]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD]"
            aria-labelledby="plan-1-title plan-1-progress"
          >
            <div class="text-left flex-grow">
              <p id="plan-1-title" class="text-gray-900 dark:text-white font-medium truncate">
                React Advanced Course
              </p>
              <p id="plan-1-progress" class="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Progress: 65%
              </p>
              <div class="overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  class="h-2 rounded-full bg-[#50A9E4] dark:bg-[#48CFAD]"
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 65%"
                ></div>
              </div>
            </div>
          </a>

          <a
            href="#"
            role="button"
            class="border-l-4 border-[#50A9E4] dark:border-[#48CFAD] rounded-r-xl w-full flex items-center p-3 hover:bg-[#6EC0FF]/20 dark:hover:bg-[#48CFAD]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD]"
            aria-labelledby="plan-2-title plan-2-date"
          >
            <div class="text-left flex-grow">
              <p id="plan-2-title" class="text-gray-900 dark:text-white font-medium truncate">
                Q1 Planning Session
              </p>
              <p id="plan-2-date" class="text-xs text-gray-600 dark:text-gray-400">
                Scheduled for Jan 15, 2025
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- 6: SUBSCRIPTIONS -->
    <div
      class="border dark:border-2 border-[#50A9E4]/30 dark:border-[#48CFAD]/30 rounded-xl shadow backdrop-blur-sm bg-white/50 dark:bg-gray-900/20 lg:col-span-6"
      role="region"
      aria-label="Subscription services"
    >
      <div class="flex flex-col p-4 h-full">
        <div class="flex items-center justify-between">
          <div class="inline-flex items-center gap-2">
            <RssIcon class="h-8 w-8 text-[#50A9E4] dark:text-[#48CFAD]" aria-hidden="true" />
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Subscriptions</h2>
          </div>
          <button
            class="text-[#50A9E4] dark:text-[#48CFAD] hover:text-[#3a8bc8] dark:hover:text-[#3cba9d] focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD] rounded-full p-1"
            aria-label="View all subscriptions"
          >
            <ArrowTopRightOnSquareIcon class="h-5 w-5" />
          </button>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4"
          role="list"
          aria-label="Subscription services list"
        >
          <a
            href="#"
            role="button"
            class="rounded-xl border border-[#50A9E4]/30 dark:border-[#48CFAD]/30 flex flex-col p-4 hover:bg-[#6EC0FF]/20 dark:hover:bg-[#48CFAD]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD]"
            aria-labelledby="sub-1-title sub-1-desc"
          >
            <div
              class="rounded-lg bg-[#6EC0FF]/20 dark:bg-[#48CFAD]/80 h-8 w-8 flex items-center justify-center mb-3"
            >
              <NewspaperIcon class="text-gray-900 dark:text-white h-4 w-4" aria-hidden="true" />
            </div>
            <h3 id="sub-1-title" class="text-lg font-bold text-gray-900 dark:text-white mb-1">
              Design Weekly
            </h3>
            <p id="sub-1-desc" class="text-sm text-gray-600 dark:text-gray-400 text-left">
              Latest design trends and tips
            </p>
          </a>

          <a
            href="#"
            role="button"
            class="rounded-xl border border-[#50A9E4]/30 dark:border-[#48CFAD]/30 flex flex-col p-4 hover:bg-[#6EC0FF]/20 dark:hover:bg-[#48CFAD]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD]"
            aria-labelledby="sub-2-title sub-2-desc"
          >
            <div
              class="rounded-lg bg-[#6EC0FF]/20 dark:bg-[#48CFAD]/80 h-8 w-8 flex items-center justify-center mb-3"
            >
              <CodeBracketIcon class="text-gray-900 dark:text-white h-4 w-4" aria-hidden="true" />
            </div>
            <h3 id="sub-2-title" class="text-lg font-bold text-gray-900 dark:text-white mb-1">
              Dev Updates
            </h3>
            <p id="sub-2-desc" class="text-sm text-gray-600 dark:text-gray-400 text-left">
              Programming news and tutorials
            </p>
          </a>

          <a
            href="#"
            role="button"
            class="rounded-xl border border-[#50A9E4]/30 dark:border-[#48CFAD]/30 flex flex-col p-4 hover:bg-[#6EC0FF]/20 dark:hover:bg-[#48CFAD]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD]"
            aria-labelledby="sub-3-title sub-3-desc"
          >
            <div
              class="rounded-lg bg-[#6EC0FF]/20 dark:bg-[#48CFAD]/80 h-8 w-8 flex items-center justify-center mb-3"
            >
              <RocketLaunchIcon class="text-gray-900 dark:text-white h-4 w-4" aria-hidden="true" />
            </div>
            <h3 id="sub-3-title" class="text-lg font-bold text-gray-900 dark:text-white mb-1">
              Analytics Pro
            </h3>
            <p id="sub-3-desc" class="text-sm text-gray-600 dark:text-gray-400 text-left">
              Data insights and reports
            </p>
          </a>

          <a
            href="#"
            role="button"
            class="rounded-xl border border-[#50A9E4]/30 dark:border-[#48CFAD]/30 flex flex-col p-4 hover:bg-[#6EC0FF]/20 dark:hover:bg-[#48CFAD]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD]"
            aria-labelledby="sub-4-title sub-4-desc"
          >
            <div
              class="rounded-lg bg-[#6EC0FF]/20 dark:bg-[#48CFAD]/80 h-8 w-8 flex items-center justify-center mb-3"
            >
              <UserGroupIcon class="text-gray-900 dark:text-white h-4 w-4" aria-hidden="true" />
            </div>
            <h3 id="sub-4-title" class="text-lg font-bold text-gray-900 dark:text-white mb-1">
              Team Digest
            </h3>
            <p id="sub-4-desc" class="text-sm text-gray-600 dark:text-gray-400 text-left">
              Team updates and announcements
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
