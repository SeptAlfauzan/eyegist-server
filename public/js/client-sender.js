/* eslint-disable prettier/prettier */

let isCameraOpen = true;
let isAudioOn = false;
let mediaStream = null;
const socket = io();

const toggleCameraButton = document.getElementById('toggleButton');
const toggleAudioButton = document.getElementById('toggleAudio');
const videoElement = document.getElementById(
    'videoElement',
);

toggleCameraButton.addEventListener('click', toggleCamera);
toggleAudioButton.addEventListener('click', toggleAudio);

function toggleCamera() {
    isCameraOpen = !isCameraOpen;
    isCameraOpen ? startCamera() : stopCamera();
    toggleCameraButton.classList.toggle('bg-red-500');
    toggleCameraButton.classList.toggle('bg-slate-500');
}

function toggleAudio() {
    isAudioOn = !isAudioOn;
    if (mediaStream) {
        mediaStream.getAudioTracks().forEach((track) => {
            track.enabled = isAudioOn;
        });
    }
    toggleAudioButton.classList.toggle('bg-red-500');
    toggleAudioButton.classList.toggle('bg-slate-500');
}

function startCamera() {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: isAudioOn })
        .then((stream) => {
            //console.log(stream);

            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = (_) => {
                videoElement.currentTime = 1;
                // Create a canvas element
                const canvas = document.createElement('canvas');
                canvas.width = videoElement.videoWidth;
                canvas.height = videoElement.videoHeight;
                // Draw the video frame onto the canvas
                const context = canvas.getContext('2d');
                context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                // Convert the canvas image data to a data URL or access the raw pixel data
                const imageDataUrl = canvas.toDataURL(); // Convert to a data URL

                // Clean up by revoking the video Blob object URL
                URL.revokeObjectURL(imageDataUrl);

                // socket.emit('video-stream', { message: 'new video stream data frame', body: e.data })
                socket.emit('video-stream', { data: imageDataUrl }); //emit image perframe to socket server
            };

            mediaRecorder.start(66); //it will send 15 image frame per second

            mediaStream = stream;
            videoElement.srcObject = stream;
        });
}

function stopCamera() {
    if (mediaStream) {
        // Stop the camera stream
        mediaStream.getTracks().forEach((track) => {
            track.stop();
        });
        mediaStream = null;
        videoElement.srcObject = null;
    }
}

isCameraOpen ? startCamera() : stopCamera();