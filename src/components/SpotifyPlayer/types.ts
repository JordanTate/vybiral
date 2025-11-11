export type IFrameAPI = {
  createController(
    element: HTMLElement,
    options: {
      width?: string;
      height?: string;
      uri: string;
    },
    callback: (controller: EmbedController) => void
  ): void;
};

export type EmbedController = {
  addListener(event: string, callback: () => void): void;
  removeListener(event: string, callback: () => void): void;
  loadUri(uri: string): void;
  play(): void;
  pause(): void;
  resume(): void;
  togglePlay(): void;
  restart(): void;
  seek(seconds: number): void;
  destroy(): void;
};

export type SpotifyPlayerProps = {
  uri: string;
  width?: string;
  height?: string;
  styles?: { readonly [key: string]: string };
};
