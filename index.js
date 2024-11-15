document.addEventListener("DOMContentLoaded", function () {
    const audioTracks = document.querySelectorAll("audio");

    audioTracks.forEach(track => {
        track.addEventListener("play", function () {
            alert("Теперь вы слушаете: " + this.parentElement.querySelector("h3").innerText);
        });
    });
});