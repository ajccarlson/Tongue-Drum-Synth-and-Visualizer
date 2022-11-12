// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

// make it a line that rises and falls based on the pitch
// take up left half of display
// keep memory of line
// show the notes that each pitch corresponds to on the right half of display
export const pitchVisualizer = new Visualizer(
  'Pitch',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    p5.background(0, 0, 0, 255);
    p5.noStroke();
    p5.fill(255, 0, 255);
    const values = analyzer.getValue();

    for (let i = 0; i < values.length; i++){
      let x = p5.map(i, 0, values.length, 0, width);
      //p5.constrain(x, 1, 20000);
      let h = -height + p5.map(Number(values[i]), 0, 255, height / 2, 0);
      p5.rect(x, height, width / values.length, h);
    }

    p5.text('Display current Freq/Note here', width / 3, 45);
  },
);
