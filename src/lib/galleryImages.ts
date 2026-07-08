import { readdirSync } from "node:fs";
import path from "node:path";

const galleryDirectory = path.join(
  process.cwd(),
  "public/images/we-care-pets/gallery",
);
const galleryPublicPath = "/images/we-care-pets/gallery";
const imageExtensions = new Set([".avif", ".jpeg", ".jpg", ".png", ".webp"]);

export type GalleryImage = {
  src: string;
  alt: string;
};

export function getGalleryImages(): GalleryImage[] {
  try {
    return readdirSync(galleryDirectory, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => imageExtensions.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((name) => ({
        src: `${galleryPublicPath}/${name}`,
        alt: `We Care Pets boarding gallery photo ${formatPhotoLabel(name)}`,
      }));
  } catch {
    return [];
  }
}

function formatPhotoLabel(filename: string) {
  const nameWithoutExtension = path.basename(filename, path.extname(filename));
  const photoNumber = nameWithoutExtension.match(/\d+/)?.[0];

  return photoNumber ?? nameWithoutExtension.replace(/[-_]+/g, " ");
}
