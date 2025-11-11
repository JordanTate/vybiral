import { IFrameAPI } from './types';

declare global {
  interface Window {
    onSpotifyIframeApiReady: (object: IFrameAPI) => void;
  }
}

export {};
