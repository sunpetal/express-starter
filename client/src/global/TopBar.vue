<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const words = ['Hej, vän!', 'Hallo, Freund!', 'おい、友よ!'];
const currentIndex = ref(0);
let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % words.length;
  }, 2500);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="w-full bg-gradient-to-r from-[#50A9E4] to-[#48CFAD] px-4 py-2 h-8">
    <h1 class="text-sm font-medium flex items-center justify-center space-x-1">
      <!--<span class="text-white">Welcome</span>-->
      <div class="h-5 flex items-center">
        <transition
          enter-active-class="transition-all duration-500 ease-out"
          leave-active-class="transition-all duration-500 ease-in"
          enter-from-class="opacity-0 translate-y-2"
          leave-to-class="opacity-0 -translate-y-2"
          mode="out-in"
        >
          <span
            :key="words[currentIndex]"
            class="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent"
          >
            {{ words[currentIndex] }}
          </span>
        </transition>
      </div>
    </h1>
  </div>
</template>
