<script setup>
import BoutonElement from "./BoutonElement.vue";
import Pierre from "../assets/images/icon-rock.svg";
import Feuille from "../assets/images/icon-paper.svg";
import Ciseau from "../assets/images/icon-scissors.svg";

let pierre = { nom: "pierre", src: Pierre };
let feuille = { nom: "feuille", src: Feuille };
let ciseau = { nom: "ciseau", src: Ciseau };
</script>

<template>
  <div
    class="w-40 h-40 sm:w-64 sm:h-64 relative bg-center bg-triangle bg-cover"
  >
    <BoutonElement
      :element="Pierre"
      class="-top-8 -sm:top-10 -left-8 -sm:left-10 border-blue-500"
      @click="$emit('clicked', pierre)"
    >
    </BoutonElement>
    <BoutonElement
      @click="$emit('clicked', feuille)"
      :element="Feuille"
      class="-top-8 -right-8 bg-feuille -sm:top-10 -sm:left-10 border-yellow-500"
    >
    </BoutonElement>
    <BoutonElement
      @click="$emit('clicked', ciseau)"
      :element="Ciseau"
      class="-bottom-8 left-10 sm:left-14 -sm:bottom-10 border-red-500"
    >
    </BoutonElement>
  </div>
</template>
