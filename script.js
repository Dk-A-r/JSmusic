let play = document.querySelector("#play");
let playing = document.querySelector("#playing");
play.addEventListener("click", () => {
 // Hide this button
    play.style = "display: none";
    playing.style = " ";

    let audioCtx = new AudioContext();

    let oscNode1 = audioCtx.createOscillator();
    oscNode1.frequency.value = 261.63;

    let gainNode1 = audioCtx.createGain();
    gainNode1.gain.value = 1;
    let gainNode2 = audioCtx.createGain();
    gainNode2.gain.value = 1;
    let gainNode3 = audioCtx.createGain();
    gainNode3.gain.value = 1;
    let gainNode4 = audioCtx.createGain();
    gainNode4.gain.value = 1;
    let gainNode5 = audioCtx.createGain();
    gainNode5.gain.value = 1;
    let gainNode6 = audioCtx.createGain();
    gainNode6.gain.value = 1;
    let gainNode7 = audioCtx.createGain();
    gainNode7.gain.value = 1;
    let gainNode8 = audioCtx.createGain();
    gainNode8.gain.value = 1;

    oscNode1.connect(gainNode1);
    gainNode1.connect(audioCtx.destination);

    oscNode1.start(audioCtx.currentTime);
    oscNode1.stop(audioCtx.currentTime + 1);

    let oscNode2 = audioCtx.createOscillator();
    oscNode2.frequency.value = 293.66;

    oscNode2.connect(gainNode2);
    gainNode2.connect(audioCtx.destination);

    oscNode2.start(audioCtx.currentTime + 1);
    oscNode2.stop(audioCtx.currentTime + 2);

    let oscNode3 = audioCtx.createOscillator();
    oscNode3.frequency.value = 329.63;

    oscNode3.connect(gainNode3);
    gainNode3.connect(audioCtx.destination);

    oscNode3.start(audioCtx.currentTime + 2);
    oscNode3.stop(audioCtx.currentTime + 3);

    let oscNode4 = audioCtx.createOscillator();
    oscNode4.frequency.value = 349.23;

    oscNode4.connect(gainNode4);
    gainNode4.connect(audioCtx.destination);

    oscNode4.start(audioCtx.currentTime + 3);
    oscNode4.stop(audioCtx.currentTime + 4);

    let oscNode5 = audioCtx.createOscillator();
    oscNode5.frequency.value = 392;

    oscNode5.connect(gainNode5);
    gainNode5.connect(audioCtx.destination);

    oscNode5.start(audioCtx.currentTime + 4);
    oscNode5.stop(audioCtx.currentTime + 5);

    let oscNode6 = audioCtx.createOscillator();
    oscNode6.frequency.value = 440;

    oscNode6.connect(gainNode6);
    gainNode6.connect(audioCtx.destination);

    oscNode6.start(audioCtx.currentTime + 5);
    oscNode6.stop(audioCtx.currentTime + 6);

    let oscNode7 = audioCtx.createOscillator();
    oscNode7.frequency.value = 493.88;

    oscNode7.connect(gainNode7);
    gainNode7.connect(audioCtx.destination);

    oscNode7.start(audioCtx.currentTime + 6);
    oscNode7.stop(audioCtx.currentTime + 7);

    let oscNode8 = audioCtx.createOscillator();
    oscNode8.frequency.value = oscNode1.frequency.value * 2;

    oscNode8.connect(gainNode8);
    gainNode8.connect(audioCtx.destination);

    oscNode8.start(audioCtx.currentTime + 7);
    oscNode8.stop(audioCtx.currentTime + 8);

});