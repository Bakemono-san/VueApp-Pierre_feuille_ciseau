<script setup>
import Entete from "./components/Entete.vue";
import step1 from "./components/step1.vue";
import step2 from "./components/step2.vue";
import step3 from "./components/step3.vue";
import step4 from "./components/step4.vue";
import Rules from "./components/Rules.vue";

import Pierreimg from "./assets/images/icon-rock.svg";
import Feuilleimg from "./assets/images/icon-paper.svg";
import Ciseauimg from "./assets/images/icon-scissors.svg";

import { ref, watch } from "vue";

let playedValue = ref("");

let datas = [
  { nom: "pierre", src: Pierreimg },
  { nom: "feuille", src: Feuilleimg },
  { nom: "ciseau", src: Ciseauimg },
];

let score = ref(0);
let result = "";
let houseChoice;

function checkScore() {
  if (playedValue.value !== "") {
    if (result === "YOU LOSE") {
      if (score.value == 0) return;
      score.value -= 1;
    } else if (result === "YOU WIN") {
      score.value += 1;
    } else return;
  }
}

function checkResult(playedValue, houseChoice) {
  if (playedValue === "pierre") {
    if (houseChoice === "pierre") {
      result = "draw";
    } else if (houseChoice === "feuille") {
      result = "YOU LOSE";
    } else if (houseChoice === "ciseau") {
      result = "YOU WIN";
    }
  } else if (playedValue === "feuille") {
    if (houseChoice === "feuille") {
      result = "draw";
    } else if (houseChoice === "ciseau") {
      result = "YOU LOSE";
    } else if (houseChoice === "pierre") {
      result = "YOU WIN";
    }
  } else if (playedValue === "ciseau") {
    if (houseChoice === "ciseau") {
      result = "draw";
    } else if (houseChoice === "pierre") {
      result = "YOU LOSE";
    } else if (houseChoice === "feuille") {
      result = "YOU WIN";
    }
    return;
  }

  console.log(playedValue, houseChoice, result);
}

watch(playedValue, () => {
  houseChoice = datas[Math.floor(Math.random() * 3)];
  checkResult(playedValue.value.nom, houseChoice.nom);
  console.log(houseChoice);
  checkScore();
});

const updateValue = (e) => {
  playedValue.value = e;
};

let showPopUp = ref(false);
</script>

<template>
  <Entete :score="score"></Entete>

  <div class="h-full w-full flex flex-col items-center justify-around">
    <transition name="slide">
      <Rules
        :open="showPopUp"
        v-if="showPopUp"
        @close="showPopUp = !showPopUp"
      ></Rules>
    </transition>
    <transition mode="out-in" name="fade">
      <step1
        :class="showPopUp ? 'opacity-0' : 'opacity-100'"
        v-if="!playedValue"
        @clicked="(e) => updateValue(e)"
      ></step1>
    </transition>

    <step2
      v-if="playedValue && !houseChoice"
      :imgSource="playedValue.src"
    ></step2>

    <step3
      v-if="playedValue && houseChoice && !result"
      :houseChoice="houseChoice.src"
      :userChoice="playedValue.src"
    ></step3>

    <transition name="slide">
      <step4
        :class="showPopUp === true ? 'opacity-0' : 'opacity-100'"
        @replay="playedValue = ''"
        v-if="playedValue && result"
        :houseChoice="houseChoice.src"
        :userChoice="playedValue.src"
        :result="result"
      >
      </step4>
    </transition>

    <button
      @click="showPopUp = !showPopUp"
      class="sm:absolute sm:bottom-4 sm:right-4 px-10 border-4 border-headerOutline text-gray-200 rounded"
    >
      rules
    </button>
  </div>
</template>

<style>
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s ease;
  opacity: 0;
  display: none;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-in-out;
}

.slide-leave-active {
  @apply opacity-0;
}

.slide-enter-from {
  @apply translate-y-3 opacity-0 duration-500;
}
.slide-leave-to {
  @apply -translate-y-3 opacity-0;
}
</style>
