const aud = document.createElement('AUDIO');
aud.setAttribute('src', 'snds/heavyrain.wav');
aud.setAttribute('loop', 'loop');

function nplay() {
  aud.play();
}

function npause() {
  aud.pause();
}

/* aud.play();
aud.pause();
aud.play();

document.getElementById('audio_1').play() */
