import { FileTypes } from '$lib/models/files';

const videoExtensions = ['m4v', 'avi', 'mpg', 'mp4', 'webm'];
const imageExtensions = ['jpg', 'gif', 'bmp', 'png'];

function getExtension(fileName: string): string {
  return fileName.toLocaleLowerCase().split('.').pop() || '';
}

function getName(fileName: string): string {
  return fileName.substring(0, fileName.lastIndexOf('.'));
}

function isImage(fileName: string): boolean {
  const extension = getExtension(fileName);
  return imageExtensions.includes(extension);
}

function isVideo(fileName: string): boolean {
  const extension = getExtension(fileName);
  return videoExtensions.includes(extension);
}

function getFileType(fileName: string): FileTypes {
  return isImage(fileName) ? FileTypes.IMAGE : isVideo(fileName) ? FileTypes.VIDEO : FileTypes.FILE;
}

export { getExtension, getName, isImage, isVideo, getFileType };
