import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

import { Instrument, InstrumentProps } from '../Instruments';
// import { getNodeText } from '@testing-library/react';

interface TromboneProps {
  note: {slide: [position, partial], name: note};
  duration?: string;
  synth?: Tone.Synth;
}

type note = "C" | "Db" | "D" | "Eb" | "E" | "F" | "Gb" | "G" | "Ab" | "A" | "Bb" | "B";
type position = 7 | 6 | 5 | 4 | 3 | 2 | 1;
type partial = 1 | 2 | 3 | 4 | 5 | 6;

const notes = List<{slide: [position, partial][], name: note}>([
  { slide: [[2, 1], [6, 3], [2, 5], [4, 6]], name: 'A' },
  { slide: [[3, 1], [7, 3], [3, 5], [5, 6]], name: 'Ab'},
  { slide: [[4, 1], [4, 5], [6, 6]], name: 'G' },
  { slide: [[5, 1], [5, 5], [7, 6]], name: 'Gb'},
  { slide: [[6, 1], [1, 2], [1, 4], [6, 5]], name: 'F' },
  { slide: [[7, 1], [2, 2], [2, 4], [7, 5]], name: 'E' },
  { slide: [[3, 2], [3, 4]], name: 'Eb'},
  { slide: [[4, 2], [1, 3], [4, 4]], name: 'D' },
  { slide: [[5, 2], [2, 3], [5, 4]], name: 'Db'},
  { slide: [[6, 2], [3, 3], [6, 4], [1, 6]], name: 'C' },
  { slide: [[7, 2], [4, 3], [7, 4], [2, 6]], name: 'B' },
  { slide: [[1, 1], [5, 3], [1, 5], [3, 6]], name: 'Bb'},
]);

function posToNote(slide_position: position, partial: partial): Tone.Unit.Frequency
{
  for (const note of notes)
  {
    if (note.slide.includes([slide_position, partial]))
    {
      let i = 2;
      for (const pattern of note.slide)
      {
        if (pattern[0] === slide_position && pattern[1] === partial)
          return `${note.name}${i}`
        i++;
      }
    }
  }
  return "";
}

export function TromboneSynth({
  synth
}: TromboneProps): JSX.Element {
  let position: position = 1; //
  let partial: partial = 2;

  let note = posToNote(position, partial);
  return (
    <div
      onMouseDown= {() => synth?.triggerAttack(note)}
      onMouseUp= {() => synth?.triggerRelease()}
      className= {classNames('ba pointer absolute dim')}
      style={{
        // CSS
      }}
      ></div>
  );
}

function TromboneType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
      >
        {title}
      </div>
  );
}

function Trombone ({ synth, setSynth }: InstrumentProps): JSX.Element {

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>;

  return (
    <div className='pv4'>
      <div className='relative dib h4 w-100 ml4'>
          {Range(1,8).map(s => {
            // notes.map()
          })}
      </div>
      <div className={'pl4 pt4 flex'}>
          {oscillators.map(o => (
            <TromboneType
              key={o}
              title={"Trombone " + o}
              onClick={() => setOscillator(o)}
              active={synth?.oscillator.type === o}
            />
          ))}
      </div>
    </div>
  );
}

export const TromboneInstrument = new Instrument('Trombone', Trombone);