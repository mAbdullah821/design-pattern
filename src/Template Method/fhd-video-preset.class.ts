import { VideoPreset } from './video-preset.class';

export class FHDVideoPreset extends VideoPreset {
  public renderVideo(appliedFilters: string): string {
    console.log('Rendering FHD video...');

    return 'Rendering FHD video quality';
  }
}
