<!--
<script setup lang="ts">
import NewLayout from '../global/NewLayout.vue';
</script>

<template>
  <div class="flex flex-1 flex-col min-h-0">
    <NewLayout />
  </div>
</template>
-->
<template>
  <div class="w-full h-full grid grid-cols-3 grid-rows-4 gap-4 p-4 overflow-hidden" role="main">
    <!-- section -->
    <div class="col-span-3 row-span-1 grid grid-cols-3 gap-4">
      <div class="p-2 border col-span-2">
        <div>[ placeholder ]</div>
      </div>
      <div class="p-2 border col-span-1">
        <div>[ placeholder ]</div>
      </div>
    </div>

    <!-- section -->
    <div class="col-span-3 row-span-2 grid grid-cols-3 gap-4">
      <div class="p-2 border">
        <div>[ placeholder ]</div>
      </div>
      <div class="p-2 border">
        <div>[ placeholder ]</div>
      </div>
      <div class="p-2 border">
        <div>[ placeholder ]</div>
      </div>
    </div>

    <!-- section -->
    <div class="p-2 border col-span-3 row-span-1">
      <div>[ placeholder ]</div>
    </div>
  </div>
</template>
