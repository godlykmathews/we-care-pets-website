import { galleryFiles } from "./galleryData";

export type GalleryImage = {
  src: string;
  alt: string;
};

const galleryPublicPath = "/images/we-care-pets/gallery";

export function getGalleryImages(): GalleryImage[] {
  return galleryFiles.map((filename) => ({
    src: `${galleryPublicPath}/${filename}`,
    alt: `We Care Pets boarding gallery photo ${formatPhotoLabel(filename)}`,
  }));
}

function formatPhotoLabel(filename: string) {
  const nameWithoutExtension = filename.replace(/\.[^/.]+$/, "");
  const photoNumber = nameWithoutExtension.match(/\d+/)?.[0];

  return photoNumber ?? nameWithoutExtension.replace(/[-_]+/g, " ");
}
