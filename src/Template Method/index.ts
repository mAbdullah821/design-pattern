import { FHDVideoPreset } from './fhd-video-preset.class';
import { HDVideoPreset } from './hd-video-preset.class';
import { SDVideoPreset } from './sd-video-preset.class';

export default () => {
  const fhdVideoPresets = new FHDVideoPreset();
  fhdVideoPresets.applyPreset('Video-Stream');
  console.log('\n\n');

  const hdVideoPresets = new HDVideoPreset();
  hdVideoPresets.applyPreset('Video-Stream');
  console.log('\n\n');

  const sdVideoPresets = new SDVideoPreset();
  sdVideoPresets.applyPreset('Video-Stream');
  console.log('\n\n');
};
