// imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

import { Instrument, InstrumentProps } from '../Instruments';

interface TrumpetProps {
    note: string; // C - B etc
    duration?: string;
    synth?: Tone.Synth;
    volume?: number; // maybe 0-100?
    octave: number;
    index: number;
    valves: [boolean, boolean, boolean];
}

export function TrumpetKey({
    note,
    synth,
    index,
    valve,
}: TrumpetProps): JSX.Element {
    return (
        <div
            onMouseDown={() => synth?.triggerAttack(`${note}`)}
            onMouseUp={() => synth?.triggerRelease()}
            className={classNames('ba pointer absolute dim', {
                'bg-black white h3':
            })}
    )
}