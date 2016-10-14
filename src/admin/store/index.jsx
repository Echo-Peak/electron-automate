import x_audio from './audio';
import x_window from './browser-window-config';
import x_shell from './shell';

export let Stores = {
  audio:new x_audio(),
  browserWindow:new x_window(),
  shell:new x_shell()
}
