// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const faiyazc = new Visualizer(
  'Hilled Frequencies',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();

    const values = analyzer.getValue();
    let stop = values[0];
    for (let i = 1; i < values.length; i++) {
      if (values[i] > stop)
        stop = values[i];
    }
    // let duration = analyzer.sampleTime;
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      // const freq = analyzer.toFrequency()
      // const x = p5.map(freq, 0, values.length - 1, 0, width);
      // const y = height / 2 + amplitude * height;
      // Place vertex
      // p5.vertex(p5.map(amplitude, 0, (Number)(stop), 0, width), p5.map(amplitude, 0, values.length - 1, 0, height));

      const x = p5.map(i, 0, values.length - 1, 0, width);
      for (const i of [1, 2, 3, 4 ,5])
      {
        p5.vertex(x, height / 2 + (amplitude * height) / i)
      }
    }
    p5.endShape();
  },
);
