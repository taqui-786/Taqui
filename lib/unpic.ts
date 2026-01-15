import { getDominantColor } from "@unpic/placeholder";
import { getPixels } from "@unpic/pixels";
import { promises as fs } from "node:fs";
import { encode } from "blurhash";

export async function getDominantColorFromImageFile(filePath: string) {
  // Read the image data from a file
  const pngData = await fs.readFile(filePath);

  // Decode the image data into raw pixel data
  const { data } = await getPixels(pngData);

  // Get the dominant color (convert Uint8Array to Uint8ClampedArray)
  return getDominantColor(new Uint8ClampedArray(data));
}
export async function getBlurHashFromImageFile(filePath: string) {
  const pngData = await fs.readFile(filePath);
  const jpgData = await getPixels(pngData);
const data = Uint8ClampedArray.from(jpgData.data);
const blurhash = encode(data, jpgData.width, jpgData.height, 4, 4);
  return blurhash;
}