function playTrack(trackSrc) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = trackSrc;
    audioPlayer.play();
}
