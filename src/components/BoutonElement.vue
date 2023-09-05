<script setup>
const props = defineProps(["element"]);
</script>

<template>
  <button
    class="w-20 sm:w-32 hover:scale-125 absolute h-20 sm:h-32 p-4 flex items-center justify-center bg-gray-200 rounded-full border-8"
  >
    <img :src="props.element" />
  </button>
</template>
