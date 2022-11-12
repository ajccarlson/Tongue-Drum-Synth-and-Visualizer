// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Slide Whistle.
 ** ------------------------------------------------------------------------ */

interface SlideProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

export function Slide({
  note,
  synth,
  index,
}: SlideProps): JSX.Element {
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.

    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
    ></div>
  );
}

function SlideWhistle({ synth, setSynth }: InstrumentProps): JSX.Element {
  return (
    <div className="pv4">
      <div className="relative dib h4 w-100 ml4">
      </div>
    </div>
  );
}

export const slideWhistleInstrument = new Instrument('Slide Whistle', SlideWhistle);
