class Note {
  note;
  pitch;
  value;
  toneNote;

  constructor(note, pitch, value, toneNote) {
    this.note = note;
    this.pitch = pitch;
    this.value = value;
    this.toneNote = toneNote;
  }

  pitchIncludes(array) {
    for (let i = 0; i < array.length; i++) {
      if (this.pitch == array[i].pitch) {
        return true;
      }
    }
    return false;
  }
}
export const c4 = new Note("c/4", "C", 1, "C4");

export const csharp4 = new Note("c#/4", "C#", 2, "C#4");

export const d4 = new Note("d/4", "D", 3, "D4");

export const dsharp4 = new Note("d#/4", "D#", 4, "D#4");

export const e4 = new Note("e/4", "E", 5, "E4");

export const f4 = new Note("f/4", "F", 6, "F4");

export const fsharp4 = new Note("f#/4", "f#", 7, "F#4");

export const g4 = new Note("g/4", "G", 8, "G4");

export const gsharp4 = new Note("g#/4", "G#", 9, "G#4");

export const a4 = new Note("a/4", "A", 10, "A4");

export const asharp4 = new Note("a#/4", "A#", 11, "A#4");

export const b4 = new Note("b/4", "B", 12, "B4");

export const c5 = new Note("c/5", "C", 13, "C5");

export const csharp5 = new Note("c#/5", "C#", 14, "C#5");

export const d5 = new Note("d/5", "D", 15, "D5");

export function keyToNote(key) {
  if (key === "a") {
    return c4;
  } else if (key === "w") {
    return csharp4;
  } else if (key === "s") {
    return d4;
  } else if (key === "e") {
    return dsharp4;
  } else if (key === "d") {
    return e4;
  } else if (key === "f") {
    return f4;
  } else if (key === "t") {
    return fsharp4;
  } else if (key === "g") {
    return g4;
  } else if (key === "y") {
    return gsharp4;
  } else if (key === "h") {
    return a4;
  } else if (key === "u") {
    return asharp4;
  } else if (key === "j") {
    return b4;
  } else if (key === "k") {
    return c5;
  } else if (key === "o") {
    return csharp5;
  } else if (key === "l") {
    return d5;
  } else {
    return false;
  }
}

export const dict = [
  [f4, gsharp4, b4],
  [f4, a4, b4],
  [gsharp4, b4, csharp5],
  [g4, b4, csharp5],
  [c4, e4, d5],
  [fsharp4, c5, d5],
  [dsharp4, g4, b4],
  [csharp4, c5, d5],
  [d4, fsharp4, gsharp4],
  [f4, g4, b4],
  [dsharp4, fsharp4, c5],
  [c4, g4, csharp5],
  [g4, asharp4, d5],
  [e4, a4, b4],
  [c4, d4, asharp4],
  [g4, a4, d5],
  [dsharp4, fsharp4, asharp4],
  [dsharp4, fsharp4, a4],
  [c4, d4, f4],
  [csharp4, dsharp4, d5],
  [e4, a4, c5],
  [d4, gsharp4, b4],
  [csharp4, e4, asharp4],
  [e4, fsharp4, gsharp4],
  [dsharp4, g4, csharp5],
  [csharp4, dsharp4, asharp4],
  [e4, c5, d5],
  [dsharp4, gsharp4, d5],
  [f4, gsharp4, asharp4],
  [f4, b4, csharp5],
  [f4, a4, c5],
  [d4, asharp4, csharp5],
  [dsharp4, c5, d5],
  [e4, g4, csharp5],
  [csharp4, dsharp4, b4],
  [c4, d4, g4],
  [fsharp4, gsharp4, d5],
  [asharp4, b4, csharp5],
  [d4, fsharp4, b4],
  [csharp4, e4, gsharp4],
  [csharp4, fsharp4, a4],
  [e4, gsharp4, d5],
  [d4, f4, b4],
  [csharp4, asharp4, c5],
  [c4, dsharp4, csharp5],
  [e4, a4, d5],
  [e4, fsharp4, csharp5],
  [c4, g4, d5],
  [f4, asharp4, csharp5],
  [d4, g4, asharp4],
  [f4, g4, csharp5],
  [c4, f4, a4],
  [c4, dsharp4, a4],
  [dsharp4, f4, gsharp4],
  [c4, dsharp4, gsharp4],
  [d4, e4, b4],
  [f4, c5, d5],
  [e4, fsharp4, asharp4],
  [csharp4, fsharp4, c5],
  [c4, e4, fsharp4],
  [dsharp4, f4, c5],
  [c4, d4, gsharp4],
  [g4, a4, csharp5],
  [dsharp4, a4, d5],
  [csharp4, dsharp4, g4],
  [csharp4, fsharp4, gsharp4],
  [c4, dsharp4, d5],
  [c4, fsharp4, b4],
  [dsharp4, gsharp4, c5],
  [dsharp4, a4, csharp5],
  [d4, fsharp4, csharp5],
  [d4, g4, b4],
  [f4, gsharp4, csharp5],
  [d4, fsharp4, a4],
  [csharp4, g4, csharp5],
  [e4, g4, b4],
  [c4, e4, b4],
  [d4, asharp4, c5],
  [e4, fsharp4, d5],
  [c4, dsharp4, g4],
  [d4, f4, asharp4],
  [csharp4, g4, c5],
  [csharp4, gsharp4, b4],
  [csharp4, fsharp4, b4],
  [c4, d4, csharp5],
  [d4, e4, fsharp4],
  [c4, f4, asharp4],
  [csharp4, e4, a4],
  [c4, d4, b4],
  [csharp4, fsharp4, asharp4],
  [csharp4, asharp4, d5],
  [c4, dsharp4, f4],
  [c4, fsharp4, a4],
  [c4, fsharp4, gsharp4],
  [fsharp4, gsharp4, b4],
  [dsharp4, fsharp4, b4],
  [c4, gsharp4, asharp4],
  [g4, asharp4, csharp5],
  [e4, gsharp4, c5],
  [f4, gsharp4, d5],
  [dsharp4, gsharp4, asharp4],
  [g4, a4, c5],
  [e4, fsharp4, c5],
  [c4, asharp4, csharp5],
  [g4, b4, d5],
  [csharp4, f4, c5],
  [d4, f4, c5],
  [asharp4, b4, d5],
  [e4, gsharp4, csharp5],
  [d4, a4, c5],
  [c4, f4, csharp5],
  [csharp4, a4, c5],
  [dsharp4, g4, asharp4],
  [dsharp4, g4, a4],
  [e4, g4, asharp4],
  [c4, a4, d5],
  [d4, e4, c5],
  [c4, b4, csharp5],
  [d4, f4, g4],
  [csharp4, dsharp4, a4],
  [csharp4, g4, a4],
  [csharp4, f4, asharp4],
  [d4, f4, a4],
  [f4, asharp4, c5],
  [dsharp4, f4, g4],
  [d4, g4, a4],
  [g4, a4, b4],
  [dsharp4, fsharp4, gsharp4],
  [c4, f4, gsharp4],
  [c4, gsharp4, csharp5],
  [asharp4, c5, d5],
  [e4, g4, a4],
  [dsharp4, g4, d5],
  [d4, e4, a4],
  [c4, a4, b4],
  [f4, gsharp4, c5],
  [f4, g4, a4],
  [c4, e4, csharp5],
  [csharp4, b4, d5],
  [c4, dsharp4, asharp4],
  [d4, a4, b4],
  [fsharp4, b4, d5],
  [fsharp4, gsharp4, c5],
  [e4, asharp4, csharp5],
  [dsharp4, asharp4, b4],
  [c4, a4, csharp5],
  [csharp4, g4, b4],
  [csharp4, f4, gsharp4],
  [dsharp4, f4, asharp4],
  [csharp4, dsharp4, fsharp4],
  [c4, fsharp4, d5],
  [fsharp4, a4, c5],
  [d4, e4, gsharp4],
  [f4, b4, d5],
  [d4, fsharp4, asharp4],
  [gsharp4, asharp4, c5],
  [d4, b4, csharp5],
  [csharp4, f4, d5],
  [fsharp4, asharp4, c5],
  [c4, fsharp4, csharp5],
  [dsharp4, gsharp4, b4],
  [c4, d4, e4],
  [e4, asharp4, d5],
  [csharp4, f4, b4],
  [csharp4, gsharp4, asharp4],
  [csharp4, dsharp4, c5],
  [c4, gsharp4, b4],
  [csharp4, gsharp4, d5],
  [c4, fsharp4, asharp4],
  [e4, g4, d5],
  [dsharp4, asharp4, d5],
  [c4, d4, a4],
  [c4, dsharp4, fsharp4],
  [g4, c5, d5],
  [dsharp4, fsharp4, d5],
  [csharp4, f4, a4],
  [c4, e4, asharp4],
  [e4, a4, csharp5],
  [e4, gsharp4, b4],
  [d4, gsharp4, c5],
  [dsharp4, fsharp4, csharp5],
  [csharp4, a4, b4],
  [csharp4, gsharp4, c5],
  [csharp4, dsharp4, gsharp4],
  [a4, b4, csharp5],
  [asharp4, c5, csharp5],
  [dsharp4, f4, csharp5],
  [c4, e4, a4],
  [c4, g4, b4],
  [e4, gsharp4, asharp4],
  [dsharp4, f4, d5],
  [fsharp4, a4, csharp5],
  [csharp4, a4, d5],
  [csharp4, e4, c5],
  [csharp4, a4, csharp5],
  [fsharp4, a4, b4],
  [c4, f4, g4],
  [f4, g4, asharp4],
  [d4, fsharp4, c5],
  [d4, a4, csharp5],
  [dsharp4, gsharp4, csharp5],
  [gsharp4, asharp4, d5],
  [dsharp4, asharp4, c5],
  [d4, gsharp4, asharp4],
  [c4, d4, fsharp4],
  [e4, g4, c5],
  [c4, b4, d5],
  [d4, g4, csharp5],
  [c4, g4, asharp4],
  [f4, asharp4, d5],
  [gsharp4, b4, d5],
  [fsharp4, b4, csharp5],
  [fsharp4, asharp4, d5],
  [dsharp4, b4, d5],
  [dsharp4, f4, b4],
  [a4, b4, d5],
  [f4, g4, c5],
  [e4, b4, d5],
  [csharp4, e4, fsharp4],
  [c4, e4, g4],
  [gsharp4, c5, d5],
  [c4, asharp4, c5],
  [c4, f4, d5],
  [d4, g4, c5],
  [dsharp4, g4, c5],
  [e4, asharp4, c5],
  [f4, a4, csharp5],
  [dsharp4, asharp4, csharp5],
  [d4, e4, csharp5],
  [gsharp4, asharp4, csharp5],
  [a4, c5, d5],
  [csharp4, g4, asharp4],
  [csharp4, g4, d5],
  [dsharp4, f4, a4],
  [fsharp4, gsharp4, asharp4],
  [c4, e4, gsharp4],
  [e4, b4, csharp5],
  [c4, gsharp4, d5],
  [csharp4, f4, g4],
  [c4, dsharp4, b4],
  [c4, asharp4, d5],
  [g4, asharp4, c5],
  [d4, e4, g4],
  [csharp4, e4, d5],
  [e4, fsharp4, a4],
  [fsharp4, gsharp4, csharp5],
  [csharp4, e4, g4],
  [csharp4, e4, b4],
  [dsharp4, a4, b4],
  [csharp4, dsharp4, f4],
  [e4, csharp5, d5],
  [fsharp4, a4, d5],
  [g4, a4, asharp4],
  [f4, a4, d5],
  [d4, e4, asharp4],
  [e4, fsharp4, b4],
  [d4, f4, csharp5],
  [d4, gsharp4, csharp5],
  [c4, f4, b4],
  [csharp4, fsharp4, d5],
  [fsharp4, asharp4, csharp5],
  [c4, a4, c5],
  [dsharp4, a4, c5],
  [d4, f4, gsharp4],
  [c4, g4, a4],
  [f4, g4, d5],
];
