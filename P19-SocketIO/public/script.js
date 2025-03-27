const socket = io();

document.getElementById('clickButton').addEventListener('click', () => {
    socket.emit('clicked', { description: "Ой, кто-то нажал на кнопку!" });
});

socket.on('updateCount', (count) => {
    console.log(`Общее количество кликов: ${count}`);
});