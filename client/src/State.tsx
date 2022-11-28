// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { TripleOSCInstrument } from './instruments/TripleOSC';
import { slideWhistleInstrument } from './instruments/ajccarlson';
import { WaveformVisualizer } from './visualizers/Waveform';
import { pitchVisualizer } from './visualizers/ajccarlson';
import { SpectrumVisualizer } from './visualizers/Spectrum';

import { StevensDrums } from './instruments/Steven-Vasquez-1';
import { StevenVisualizer } from './visualizers/Steven-Vasquez-1';


/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([PianoInstrument, TripleOSCInstrument, slideWhistleInstrument, StevensDrums]);       // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
const visualizers = List([WaveformVisualizer, SpectrumVisualizer, pitchVisualizer, faiyazc, StevenVisualizer]);    // similar to Visualizer[]


/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
  'instruments': instruments,
  'visualizers': visualizers,
});
