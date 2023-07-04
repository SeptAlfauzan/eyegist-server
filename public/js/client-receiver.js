/* eslint-disable prettier/prettier */
const videoElement = document.getElementById('videoElement');
const socket = io();
var img = document.getElementById('play');

socket.on('onVideoStream', (res) => {
    img.src = res.data
})