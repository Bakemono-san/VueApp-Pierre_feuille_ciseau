<script setup>
import BoutonElement from "./BoutonElement.vue";

const props = defineProps(["userChoice", "houseChoice", "result"]);
</script>

<template>
  <section class="w-full sm:relative px-16">
    <div
      class="text-white text-center flex justify-around md:justify-between sm:justify-evenly sm:gap-x-80 gap-2"
    >
      <div class="flex flex-col gap-4 sm:flex-col-reverse">
        <BoutonElement :element="userChoice" class="border-red-500 relative">
        </BoutonElement>
        <p>you picked</p>
      </div>
      <div class="flex flex-col sm:flex-col-reverse gap-4 items-center">
        <BoutonElement
          :element="houseChoice"
          class="relative border-yellow-500"
        >
        </BoutonElement>
        <p>the house picked</p>
      </div>
    </div>
    <div
      class="sm:absolute sm:inset-0 sm:mx-auto flex flex-col gap-4 items-center justify-center h-full"
    >
      <p class="text-white text-6xl font-bold text-center">{{ result }}</p>
      <button
        class="w-52 py-2 rounded bg-white"
        :class="result === 'YOU WIN' ? 'text-darkText' : 'text-red-500'"
        @click="$emit('replay')"
      >
        play again
      </button>
    </div>
  </section>
</template>
