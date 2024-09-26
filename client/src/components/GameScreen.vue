<template>
  <div>
    <canvas
        ref="canvas"
        style="border: 2px solid black">
    </canvas>
  </div>
</template>

<script setup>
  import CreateCanvas from "../layout/CreateCanvas.ts";
  import CreatePlayers from "../layout/CreatePlayers.ts";
  import {onMounted} from "vue";

  onMounted(() => {
    CreateCanvas.createCanvas();
    CreatePlayers.createPlayers();
    CreatePlayers.drawPlayers();
  });
</script>

<style scoped>

</style>
