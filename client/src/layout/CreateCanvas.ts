import {onMounted, ref} from "vue";

const canvas = ref(null);
const canvasSize = {
    width: 640,
    height: 480,
}

const createCanvas = () => {
    const ctx = canvas.value.getContext("2d");
    canvas.value.width = canvasSize.width;
    canvas.value.height = canvasSize.height;
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
}

export default { canvas, canvasSize, createCanvas }