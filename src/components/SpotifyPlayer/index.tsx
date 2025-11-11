'use client';

import { useEffect, useEffectEvent, useRef, useState } from 'react';
import { EmbedController, IFrameAPI, SpotifyPlayerProps } from './types';

let globalSpotifyAPI: IFrameAPI | null = null;

export default function SpotifyPlayer({
  uri,
  width = '100%',
  height = '352',
  styles,
}: SpotifyPlayerProps) {
  const embedRef = useRef<HTMLDivElement>(null);
  const spotifyEmbedControllerRef = useRef<EmbedController>(null);
  const [iFrameAPI, setIFrameAPI] = useState<IFrameAPI | undefined>(undefined);
  const [playerLoaded, setPlayerLoaded] = useState(false);
  const onReady = useEffectEvent((api: IFrameAPI) => {
    console.log(api);
    globalSpotifyAPI = api;
    setIFrameAPI(api);
  });
  const createController = useEffectEvent((api: IFrameAPI) => {
    if (!embedRef.current) return;

    api.createController(
      embedRef.current!,
      {
        width,
        height,
        uri,
      },
      (controller: EmbedController) => {
        controller.addListener('ready', () => {
          setPlayerLoaded(true);
        });

        spotifyEmbedControllerRef.current = controller;
      }
    );
  });

  useEffect(() => {
    if (
      document.querySelector(
        'script[src="https://open.spotify.com/embed/iframe-api/v1"]'
      ) == null
    ) {
      const script = document.createElement('script');
      script.src = 'https://open.spotify.com/embed/iframe-api/v1';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (iFrameAPI) return;

    if (globalSpotifyAPI) {
      onReady(globalSpotifyAPI);
      return;
    }

    window.onSpotifyIframeApiReady = (api) => {
      onReady(api);
    };
  }, [iFrameAPI]);

  useEffect(() => {
    if (!iFrameAPI || playerLoaded === undefined) return;

    createController(iFrameAPI);
  }, [iFrameAPI, playerLoaded, uri]);

  return (
    <div className={`${styles?.spotifyPlayer}`}>
      <div
        className={
          'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out'
        }
        style={{ opacity: playerLoaded ? '1' : '0' }}
      >
        <div
          ref={embedRef}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        />
      </div>
      {!playerLoaded && (
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-neutral-500 rounded-lg transition duration-500 ease-in-out animate-pulse`}
          style={{ width: `${width}px`, height: `${height}px` }}
        ></div>
      )}
    </div>
  );
}
