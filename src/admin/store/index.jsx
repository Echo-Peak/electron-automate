import x_audio from './audio';
import x_browserWindow from './browser-window-config';
import x_shell from './shell';
import x_window from './windows';
import x_youtube from './youtube';
import x_videos from './videos';
import x_pictures from './pictures';

export let Stores = {
  audio:new x_audio(),
  browserWindow:new x_browserWindow(),
  shell:new x_shell(),
  window:new x_window(),
  youtube:new x_youtube(),
  videos:new x_videos(),
  pictures:new x_pictures(),
}
