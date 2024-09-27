import { VideoPreset } from './video-preset.class';

export class HDVideoPreset extends VideoPreset {
  public renderVideo(appliedFilters: string): string {
    console.log('Rendering HD video...');

    return 'Rendering HD video quality';
  }
}
