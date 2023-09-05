<script setup>
import logo from "../assets/images/logo.svg";
let props = defineProps(["score"]);
</script>

<template>
  <div
    class="p-4 border-4 border-headerOutline rounded list-none flex justify-between gap-20 sm:gap-60"
  >
    <div class="text-gray-200 font-bold text-lg">
      <img :src="logo" />
    </div>
    <div class="bg-white px-6 py-4 rounded text-center">
      <h3 class="text-scoreText">Score</h3>
      <p class="font-bold text-darkText text-4xl">{{ score }}</p>
    </div>
  </div>
</template>
