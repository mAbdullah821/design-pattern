import { VideoPreset } from './video-preset.class';

export class SDVideoPreset extends VideoPreset {
  public renderVideo(appliedFilters: string): string {
    console.log('Rendering SD video...');

    return 'Rendering SD video quality';
  }
}
