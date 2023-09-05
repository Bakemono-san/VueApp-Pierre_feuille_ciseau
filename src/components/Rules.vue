<script setup></script>

<template>
  <div
    class="bg-white flex flex-col items-end gap-4 w-fit h-fit p-8 rounded absolute inset-0 m-auto"
  >
    <button @click="$emit('close')">
      <img src="../assets/images/icon-close.svg" />
    </button>
    <img src="../assets/images/image-rules.svg" alt="" />
  </div>
</template>
