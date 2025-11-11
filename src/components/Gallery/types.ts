export type GalleryImage = {
  src: string;
  alt: string;
  info: GalleryImageInfo;
};

export type GalleryImageInfo = {
  artist: string;
  track: string;
  credit: string;
};

export type GalleryProps = {
  images: GalleryImage[];
};
