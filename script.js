document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const muteButton = document.getElementById("muteButton");
    const unmuteButton = document.getElementById("unmuteButton");


    // Управление звуком
    muteButton.addEventListener("click", function() {
        video.muted = true;
        muteButton.disabled = true;
        unmuteButton.disabled = false;
    });

    unmuteButton.addEventListener("click", function() {
        video.muted = false;
        muteButton.disabled = false;
        unmuteButton.disabled = true;
    });

    // Запуск видео и перезапуск при завершении
    video.addEventListener("ended", function() {
        video.currentTime = 0;
        video.play();
    });

    video.play();
});