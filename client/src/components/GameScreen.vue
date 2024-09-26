<template>
  <div>
    <canvas
        ref="canvas"
        style="border: 2px solid black"
        v-on:mousedown="handleMouseDown"
        v-on:mousemove="handleMouseMove"></canvas>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const canvas = ref(null);
let position = 0;
let tpp = [50, 200]
let leftPlayer = {};
let rightPlayer = {};

const createPlayer = () => {
  const size = 20
  leftPlayer = {
    x: tpp[1],
    y: size + 10,
    size: size,
  };
  rightPlayer = {
    x: canvas.value.width / 2,
    y: size + 10,
    size: size,
  }
};

const drawLeftPlayer = (context) => {
  context.beginPath();
  context.arc(leftPlayer.x, leftPlayer.y, leftPlayer.size, 0, 2 * Math.PI, false);
  context.fillStyle = "#000";
  context.fill();
};

const drawRightPlayer = (context) => {
  context.beginPath();
  context.arc(rightPlayer.x, rightPlayer.y, rightPlayer.size, 0, 2 * Math.PI, false);
  context.fillStyle = "#000";
  context.fill();
};

const drawRightPlayerMovement = (context, position) => {
  context.clearRect(rightPlayer.x - rightPlayer.size, rightPlayer.y - rightPlayer.size, rightPlayer.size * 2, rightPlayer.size * 2);
  context.beginPath();
  rightPlayer.x = position
  context.arc(rightPlayer.x, rightPlayer.y, rightPlayer.size, 0, 2 * Math.PI, false);
  context.fillStyle = "#000";
  context.fill();
};

const changeLeftPlayer = (context) => {
  context.clearRect(leftPlayer.x - leftPlayer.size, leftPlayer.y - leftPlayer.size, leftPlayer.size * 2, leftPlayer.size * 2);
  position = (position + 1) % tpp.length;
  leftPlayer.x = tpp[position];
  leftPlayer.y = 30;
  drawLeftPlayer(context);
};

onMounted(() => {
  const context = canvas.value.getContext("2d");

  canvas.value.width = 600;
  canvas.value.height = 400;

  createPlayer();
  context.clearRect(0, 0, canvas.value.width, canvas.value.height);
  drawLeftPlayer(context);
  drawRightPlayer(context)

  console.log("Canvas context:", context);
});

const handleMouseMove = (event) => {
  const context = canvas.value.getContext("2d");
  drawRightPlayerMovement(context, event.clientX);
}

const handleMouseDown = (event) => {
  const context = canvas.value.getContext("2d");
  if (event.button === 0) {
    changeLeftPlayer(context);
  }
};

</script>

<style scoped>

</style>
