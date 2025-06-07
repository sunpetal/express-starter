<!-- src/views/Login.vue -->
<script setup lang="ts">
import { useRouter } from 'vue-router';
import beachImage from '@/assets/beachshore.jpg';

const router = useRouter();

function onSubmit() {
  // No real credentials—just navigate back to Dashboard
  router.push({ name: 'dashboard' });
}
</script>

<template>
  <div
    class="relative flex items-center justify-center h-full w-full bg-cover bg-center"
    :style="{ backgroundImage: `url(${beachImage})` }"
  >
    <!-- semi-transparent overlay -->
    <div class="absolute inset-0 bg-black/30 dark:bg-black/60"></div>

    <!-- Login panel -->
    <div class="relative text-center text-white">
      <div class="text-3xl md:text-4xl font-mono typing mb-2 text-blue-300 dark:text-teal-300">
        Welcome to...
      </div>

      <div
        class="text-5xl md:text-6xl font-extrabold text-teal-300 dark:text-blue-400 drop-shadow-md mt-2"
      >
        BlueHaven
      </div>

      <p class="mt-2 text-lg md:text-xl text-blue-200 dark:text-teal-400 italic">
        A Safe Harbor for Meaningful Work.
      </p>

      <!-- Login Form (no real logic) -->
      <div
        class="mt-8 bg-white/20 dark:bg-gray-800 backdrop-blur-lg p-6 rounded-xl shadow-xl w-80 md:w-96 border border-white/20 dark:border-gray-700"
      >
        <h2 class="text-xl font-semibold mb-6 text-teal-300 dark:text-blue-400">Sign In</h2>

        <!-- Email -->
        <div class="mb-4 text-left">
          <label for="email" class="block text-sm font-medium text-blue-200 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="block w-full rounded-md bg-blue-100/20 dark:bg-gray-700 px-3 py-2 text-base text-black dark:text-white outline outline-1 outline-teal-300 dark:outline-gray-600 placeholder:text-blue-200 dark:placeholder:text-gray-400 focus:outline-2 focus:outline-blue-400 dark:focus:outline-teal-400 transition"
            placeholder="you@example.com"
            aria-label="Email"
            required
          />
        </div>

        <!-- Password -->
        <div class="mb-4 text-left">
          <label for="password" class="block text-sm font-medium text-blue-200 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            class="block w-full rounded-md bg-blue-100/20 dark:bg-gray-700 px-3 py-2 text-base text-black dark:text-white outline outline-1 outline-teal-300 dark:outline-gray-600 placeholder:text-blue-200 dark:placeholder:text-gray-400 focus:outline-2 focus:outline-blue-400 dark:focus:outline-teal-400 transition"
            placeholder="••••••••"
            aria-label="Password"
            required
          />
        </div>

        <!-- Login button just pushes to Dashboard -->
        <button
          @click="onSubmit"
          class="w-full cursor-pointer p-3 text-lg font-semibold text-white bg-teal-400 dark:bg-blue-500 rounded-lg shadow-md hover:bg-teal-500 dark:hover:bg-blue-600 transition-all hover:shadow-teal-500/50 dark:hover:shadow-blue-500/50"
        >
          Login
        </button>

        <!-- Sign Up link (no change) -->
        <p class="mt-4 text-sm text-blue-200 dark:text-gray-400">
          Don’t have an account?
          <a href="#" class="text-teal-300 dark:text-blue-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.typing {
  display: inline-block;
  border-right: 3px solid white;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation:
    typing 1.5s steps(12, end) forwards,
    blink 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 12ch;
  }
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

:root {
  transition: background-color 0.3s ease;
}
</style>
