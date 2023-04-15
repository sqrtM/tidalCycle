import { repl, controls } from "@strudel.cycles/core";
import {
  initAudioOnFirstClick,
  getAudioContext,
  webaudioOutput,
  samples
} from "@strudel.cycles/webaudio";
const { note } = controls;

samples({
  bd: ['bd/BT0AADA.wav','bd/BT0AAD0.wav','bd/BT0A0DA.wav','bd/BT0A0D3.wav','bd/BT0A0D0.wav','bd/BT0A0A7.wav'],
  sd: ['sd/rytm-01-classic.wav','sd/rytm-00-hard.wav'],
  hh: ['hh27/000_hh27closedhh.wav','hh/000_hh3closedhh.wav'],
  perc: ['perc/002_perc2.wav'],
}, 'github:tidalcycles/Dirt-Samples/master/');

export default function play() {
  initAudioOnFirstClick();
  const ctx = getAudioContext();

  const { scheduler } = repl({
    defaultOutput: webaudioOutput,
    getTime: () => ctx.currentTime,
  });

  const pattern = note("c1").s("sd");

  scheduler.setPattern(pattern);
  setTimeout(() => {
    console.log('wait')
    scheduler.start()
  }, 1000)
  
  console.log("sosososo")
  
}
