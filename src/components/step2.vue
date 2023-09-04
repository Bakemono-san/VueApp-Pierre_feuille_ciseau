<script setup>
import BoutonElement from "./BoutonElement.vue";

const props = defineProps(["imgSource"]);
</script>

<template>
  <div class="w-full text-white flex justify-around">
    <div class="flex flex-col gap-4">
      <BoutonElement :element="props.imgSource" class="border-red-500 relative">
      </BoutonElement>
      <p>you picked</p>
    </div>
    <div class="flex flex-col gap-4 items-center">
      <BoutonElement class="relative bg-gray-700 border-none" />
      <p>the house picked</p>
    </div>
  </div>
</template>
