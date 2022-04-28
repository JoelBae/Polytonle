import { Renderer, Stave, StaveNote, Voice, Formatter } from "vexflow";
import * as notes from "./notes.js";
import * as Tone from "tone";

// render all staves
const s1 = document.getElementById("staff1");
const renderer1 = new Renderer(s1, Renderer.Backends.SVG);
renderer1.resize(200, 150);
const context1 = renderer1.getContext();
const stave1 = new Stave(0, 0, 150);
stave1.addClef("treble");
context1.setFillStyle("white");
context1.scale(1.5, 1.5);
stave1.setContext(context1).draw();

const s2 = document.getElementById("staff2");
const renderer2 = new Renderer(s2, Renderer.Backends.SVG);
renderer2.resize(200, 150);
const context2 = renderer2.getContext();
const stave2 = new Stave(0, 0, 200);
stave2.addClef("treble");
context2.setFillStyle("white");
context2.scale(1.5, 1.5);
stave2.setContext(context2).draw();

const s3 = document.getElementById("staff3");
const renderer3 = new Renderer(s3, Renderer.Backends.SVG);
renderer3.resize(200, 200);
const context3 = renderer3.getContext();
const stave3 = new Stave(0, 0, 200);
stave3.addClef("treble");
context3.setFillStyle("white");
context3.scale(1.5, 1.5);
stave3.setContext(context3).draw();

// create piano sampler
const piano = new Tone.Sampler({
  urls: {
    C4: "C4.mp3",
    "D#4": "Ds4.mp3",
    "F#4": "Fs4.mp3",
    A4: "A4.mp3",
    C5: "C5.mp3",
    "D#5": "Ds5.mp3",
    "F#5": "Fs5.mp3",
  },
  release: 5,
  baseUrl: "https://tonejs.github.io/audio/salamander/",
  onload() {
    loaded = true;
  },
}).toDestination();

let guess = [];
let cur_guess = 1;
let prevCount = 0;
let gameInputs = true;

const offsetFromDate = new Date(2022, 3, 26);
const msOffset = Date.now() - offsetFromDate;
const dayOffset = msOffset / 1000 / 60 / 60 / 24;
const answer = notes.dict[Math.floor(dayOffset)];
const messageContainer = document.querySelector("[data-message-container");

// event listeners
startInteraction();

function startInteraction() {
  document.addEventListener("mousedown", handleMouseClick);
  document.addEventListener("keydown", handleKeyPress);
}

function stopInteraction() {
  document.removeEventListener("click", handleMouseClick);
  document.removeEventListener("keydown", handleKeyPress);
}

function handleMouseClick(e) {
  if (gameInputs && e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key);
  } else if (gameInputs && e.target.matches("[data-enter]")) {
    submitGuess();
  } else if (gameInputs && e.target.matches("[data-back]")) {
    deleteKey();
  } else if (gameInputs && e.target.matches("[data-chord")) {
    playChord();
  } else if (gameInputs && e.target.matches("[data-tune]")) {
    playCNote();
  } else if (e.target.matches("[data-open-target]")) {
    const modal = document.querySelector(e.target.dataset.openTarget);
    openModal(modal);
  } else if (e.target.matches("[data-close]")) {
    const modal = e.target.closest(".overlay");
    closeModal(modal);
  }
}

function openModal(modal) {
  modal.style.display = "flex";
  if (modal == null) {
    return;
  }
  modal.classList.add("active");
  modal.classList.remove("inactive");
}

function closeModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.remove("active");
  modal.classList.add("inactive");

  setTimeout(
    () => {
      modal.style.display = "none";
    },
    150,
    modal
  );
}

function handleKeyPress(e) {
  if (!gameInputs) {
    return;
  }
  if (e.key === "Enter") {
    submitGuess();
    return;
  }

  if (e.key === "Backspace" || e.key === "Delete") {
    deleteKey();
    return;
  }

  pressKey(e.key);
  return;
}

function pressKey(key) {
  const note = notes.keyToNote(key);
  if (!note) {
    return;
  }

  if (guess.length == 3) {
    showMessage("Too many notes");
    return;
  }

  if (note.pitchIncludes(guess)) {
    showMessage(`${note.pitch} already in chord`);
    return;
  }

  if (compareNotes(note, guess)) {
    guess.push(note);
    updateNotes();
  }
  return;
}

// draw notes on staff
function updateNotes() {
  let guessStrings = [];
  for (let i = 0; i < guess.length; i++) {
    guessStrings.push(guess[i].note);
  }
  const notes = [new StaveNote({ keys: guessStrings, duration: "w" })];
  const voice = new Voice({ num_beats: 4, beat_value: 4 });
  voice.addTickables(notes);
  Vex.Flow.Accidental.applyAccidentals([voice]);
  new Formatter().joinVoices([voice]).format([voice], 350);

  if (cur_guess == 1) {
    if (prevCount == 0) {
      voice.draw(context1, stave1);
    } else {
      context1.svg.removeChild(context1.svg.lastChild);
      voice.draw(context1, stave1);
    }
  } else if (cur_guess == 2) {
    if (prevCount == 0) {
      voice.draw(context2, stave2);
    } else {
      context2.svg.removeChild(context2.svg.lastChild);
      voice.draw(context2, stave2);
    }
  } else if (cur_guess == 3) {
    if (prevCount == 0) {
      voice.draw(context3, stave3);
    } else {
      context3.svg.removeChild(context3.svg.lastChild);
      voice.draw(context3, stave3);
    }
  }
  prevCount = guess.length;
  return;
}

function deleteKey() {
  if (guess.length == 0) {
    return;
  }

  guess.pop();

  if (guess.length == 0) {
    if (cur_guess == 1) {
      context1.svg.removeChild(context1.svg.lastChild);
    } else if (cur_guess == 2) {
      context2.svg.removeChild(context2.svg.lastChild);
    } else if (cur_guess == 3) {
      context3.svg.removeChild(context3.svg.lastChild);
    }
    prevCount = guess.length;
    return;
  } else {
    updateNotes();
  }
}

// color ith note
function applyNoteColor(submit, i, wait) {
  let same = false;
  return new Promise((resolve) => {
    setTimeout(() => {
      if (answer[i] === guess[i]) {
        document
          .querySelector(`[data-note="${guess[i].note}"]`)
          .classList.add("correct");
        submit[0].setKeyStyle(i, {
          fillStyle: "rgb(83, 141, 78)",
          strokeStyle: "rgb(83, 141, 78)",
        });
        same = true;
      } else if (guess[i].pitchIncludes(answer)) {
        document
          .querySelector(`[data-note="${guess[i].note}"]`)
          .classList.add("wrong-location");
        submit[0].setKeyStyle(i, {
          fillStyle: "rgb(181, 159, 59)",
          strokeStyle: "rgb(181, 159, 59)",
        });
      } else {
        document
          .querySelector(`[data-note="${guess[i].note}"]`)
          .classList.add("wrong");
        submit[0].setKeyStyle(i, {
          fillStyle: "rgb(77, 77, 77)",
          strokeStyle: "rgb(77, 77, 77)",
        });
      }

      const voice = new Voice({ num_beats: 4, beat_value: 4 });
      voice.addTickables(submit);
      Vex.Flow.Accidental.applyAccidentals([voice]);
      new Formatter().joinVoices([voice]).format([voice], 350);

      if (cur_guess == 1) {
        context1.svg.removeChild(context1.svg.lastChild);
        voice.draw(context1, stave1);
      } else if (cur_guess == 2) {
        context2.svg.removeChild(context2.svg.lastChild);
        voice.draw(context2, stave2);
      } else if (cur_guess == 3) {
        context3.svg.removeChild(context3.svg.lastChild);
        voice.draw(context3, stave3);
      }

      resolve(same);
    }, wait * 500);
  });
}

// color chord one by one
async function applyColors(submit) {
  let isCorrect = await applyNoteColor(submit, 0, 0);
  for (let i = 1; i < 3; i++) {
    if (!(await applyNoteColor(submit, i, 1))) {
      isCorrect = false;
    }
  }
  prevCount = 0;
  cur_guess++;
  guess = [];

  if (isCorrect) {
    correct(cur_guess);
  } else if (cur_guess === 4) {
    showMessage(
      "The chord was " +
        answer[0].pitch +
        " " +
        answer[1].pitch +
        " " +
        answer[2].pitch,
      5000
    );
  }
}

function submitGuess() {
  if (guess.length != 3) {
    showMessage("Not enough notes");
    return;
  }

  let guessStrings = [];
  for (let i = 0; i < guess.length; i++) {
    guessStrings.push(guess[i].note);
  }

  let submit = [new StaveNote({ keys: guessStrings, duration: "w" })];
  applyColors(submit);
}

function correct(guess_num) {
  const FIRSTGUESS = 2;
  const SECONDGUESS = 3;
  const THIRDGUESS = 4;
  if (guess_num === FIRSTGUESS) {
    setTimeout(showMessage, 500, "Perfect Pitch?", 3000);
  } else if (guess_num === SECONDGUESS) {
    setTimeout(showMessage, 500, "Genius", 3000);
  } else if (guess_num === THIRDGUESS) {
    setTimeout(showMessage, 500, "Amazing", 3000);
  }
  gameInputs = false;
}

function showMessage(string, duration = 1000) {
  const message = document.createElement("div");
  message.textContent = string;
  message.classList.add("message");
  messageContainer.prepend(message);
  if (duration != null) {
    setTimeout(() => {
      message.classList.add("hide");
      message.addEventListener("transitionend", () => {
        message.remove();
      });
    }, duration);
  }
}

function compareNotes(note, array) {
  for (let i = 0; i < array.length; i++) {
    if (note.value < array[i].value) {
      showMessage("Notes must be entered ascending");
      return false;
    } else if (Math.abs(array[i].value - note.value) === 1) {
      showMessage("Notes must be more than a semitone apart");
      return false;
    }
  }
  return true;
}

function playChord() {
  if (!piano.loaded) {
    console.log("ERROR: Piano not loaded");
    return;
  }

  piano.triggerAttackRelease(
    [answer[0].toneNote, answer[1].toneNote, answer[2].toneNote],
    2
  );
}

function playCNote() {
  if (!piano.loaded) {
    console.log("ERROR: Piano not loaded");
    return;
  }

  piano.triggerAttackRelease(["C4"], 2);
}
