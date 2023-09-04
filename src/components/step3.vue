<script setup>
import BoutonElement from "./BoutonElement.vue";

const props = defineProps(["userChoice", "houseChoice"]);
</script>

<template>
  <div class="w-full text-white flex justify-around">
    <div class="flex flex-col gap-4">
      <BoutonElement :element="userChoice" class="border-red-500 relative">
      </BoutonElement>
      <p>you picked</p>
    </div>
    <div class="flex flex-col gap-4 items-center">
      <BoutonElement
        :element="'src/' + houseChoice"
        class="relative border-yellow-500"
      >
      </BoutonElement>
      <p>the house picked</p>
    </div>
  </div>
</template>
