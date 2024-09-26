import CreateCanvas from "./CreateCanvas";

const defaultSize = 15;
enum state {
    NONE,
    TELEPORTER,
    SLIDER

}

const players = [
    {
        type: state.NONE,
        x: 0,
        y: 0,
        size: 0,
        color: 'green'
    },
    {
        type: state.NONE,
        x: 0,
        y: 0,
        size: 0,
        color: 'red'
    }
]

const createPlayers = () => {

    players[0].type = state.TELEPORTER;
    players[0].x = CreateCanvas.canvas.value.width / 3;
    players[0].y = defaultSize + 5;
    players[0].size = defaultSize;

    players[1].type = state.SLIDER;
    players[1].x = CreateCanvas.canvas.value.width / 2;
    players[1].y = defaultSize + 5;
    players[1].size = defaultSize;
}

const drawPlayers = () => {
    const ctx = CreateCanvas.canvas.value.getContext("2d");
    for (let i = 0, len = players.length; i < len; i++) {
        ctx.clearRect(players[i].x - players[i].size, players[i].y - players[i].size, players[i].size * 2, players[i].size * 2);
        ctx.beginPath()
        ctx.arc(players[i].x, players[i].y, players[i].size, 0, 2 * Math.PI);
        ctx.fillStyle = players[i].color;
        ctx.fill();
        ctx.closePath();
    }
}

export default { players, createPlayers, drawPlayers };