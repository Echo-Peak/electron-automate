import x_audio from './audio';
import x_browserWindow from './browser-window-config';
import x_shell from './shell';
import x_window from './windows';

export let Stores = {
  audio:new x_audio(),
  browserWindow:new x_browserWindow(),
  shell:new x_shell(),
  window:new x_window()
}
