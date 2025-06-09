<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/20/solid';

const open = ref(true);
</script>

<template>
  <div>
    <button
      class="rounded-md bg-white dark:bg-gray-900 px-3 py-1.5 text-sm font-semibold text-gray-900 dark:text-white hover:bg-[#50A9E4]/10 dark:hover:bg-[#48CFAD]/10 border border-[#50A9E4]/30 dark:border-[#48CFAD]/30 shadow"
      @click="open = true"
    >
      Open dialog
    </button>
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-50" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/40 dark:bg-black/70 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-2xl border border-[#50A9E4]/30 dark:border-[#48CFAD]/30 bg-white dark:bg-gray-900 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <button
                  @click="open = false"
                  type="button"
                  class="absolute top-4 right-4 z-10 rounded-full p-2 text-gray-500 dark:text-gray-300 hover:bg-[#50A9E4]/10 dark:hover:bg-[#48CFAD]/10 hover:text-[#50A9E4] dark:hover:text-[#48CFAD] focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD] transition cursor-pointer"
                  aria-label="Close"
                >
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>

                <div class="px-6 pb-4 pt-5 sm:p-8 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:ml-0 sm:mt-0 sm:text-left w-full">
                      <div class="px-0 sm:px-0">
                        <h3 class="text-base font-semibold text-gray-900 dark:text-white mt-2">
                          Card Name
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                          Personal details and application.
                        </p>
                      </div>
                      <div class="mt-6 border-t border-gray-100 dark:border-white/10">
                        <dl class="divide-y divide-gray-100 dark:divide-white/10">
                          <div class="px-0 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt class="text-sm font-medium text-gray-900 dark:text-white">
                              Full name
                            </dt>
                            <dd
                              class="mt-1 text-sm text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0"
                            >
                              Margot Foster
                            </dd>
                          </div>
                          <div class="px-0 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt class="text-sm font-medium text-gray-900 dark:text-white">
                              Application for
                            </dt>
                            <dd
                              class="mt-1 text-sm text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0"
                            >
                              Backend Developer
                            </dd>
                          </div>
                          <div class="px-0 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt class="text-sm font-medium text-gray-900 dark:text-white">
                              Email address
                            </dt>
                            <dd
                              class="mt-1 text-sm text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0"
                            >
                              margotfoster@example.com
                            </dd>
                          </div>
                          <div class="px-0 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt class="text-sm font-medium text-gray-900 dark:text-white">
                              Salary expectation
                            </dt>
                            <dd
                              class="mt-1 text-sm text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0"
                            >
                              $120,000
                            </dd>
                          </div>
                          <div class="px-0 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt class="text-sm font-medium text-gray-900 dark:text-white">About</dt>
                            <dd
                              class="mt-1 text-sm text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0"
                            >
                              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
                              cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint.
                              Sit id mollit nulla mollit nostrud in ea officia proident. Irure
                              nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="px-6 py-4 sm:flex sm:flex-row-reverse rounded-b-2xl border-t border-[#50A9E4]/20 dark:border-[#48CFAD]/20"
                >
                  <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-[#50A9E4] dark:bg-[#48CFAD] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#3a8bc8] dark:hover:bg-[#3cba9d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD] sm:ml-3 sm:w-auto cursor-pointer"
                    @click="open = false"
                  >
                    Open Card
                  </button>
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-[#50A9E4]/30 dark:ring-[#48CFAD]/30 hover:bg-[#50A9E4]/10 dark:hover:bg-[#48CFAD]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#50A9E4] dark:focus:ring-[#48CFAD] sm:mt-0 sm:w-auto cursor-pointer"
                    @click="open = false"
                  >
                    Open Board
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
