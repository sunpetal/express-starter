<template>
  <div
    class="p-4 w-screen grid grid-cols-1 grid-rows-5 gap-4 lg:grid-cols-3 lg:grid-rows-3"
    role="region"
    aria-labelledby="test-grid"
  >
    <!-- 1: MY WORK -->
    <div
      id="test-grid"
      class="relative border rounded-b rounded-t-xl lg:rounded-r lg:rounded-l-xl shadow row-span-1 lg:row-span-3 lg:col-span-1 bg-white dark:bg-gray-800"
      role="gridcell"
    >
      <!-- my work content -->
    </div>

    <!-- 2: PROJECTS -->
    <div
      class="relative border rounded shadow row-span-1 lg:row-start-1 lg:col-start-2 bg-white dark:bg-gray-800"
      role="gridcell"
    >
      <!-- projects content -->
    </div>

    <!-- 3: NEWSFEED -->
    <div
      class="relative border rounded shadow row-span-1 lg:row-start-2 lg:col-start-2 bg-white dark:bg-gray-800"
      role="gridcell"
    >
      <!-- newsfeed content -->
    </div>

    <!-- 4: TRAINING -->
    <div
      class="relative border rounded shadow row-span-1 lg:row-start-3 lg:col-start-2 bg-white dark:bg-gray-800"
      role="gridcell"
    >
      <!-- training content -->
    </div>

    <!-- 5: MY CLIENT -->
    <div
      class="relative border rounded-t rounded-b-xl lg:rounded-l lg:rounded-r-xl shadow row-span-1 lg:row-span-3 lg:col-start-3 bg-white dark:bg-gray-800"
      role="gridcell"
    >
      <!-- my client content -->
    </div>
  </div>
</template>
