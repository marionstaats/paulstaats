export const getImageUrl = (imageName: string | undefined, imageFolder: string = 'work') => {
  return new URL(`../assets/images/${imageFolder}/${imageName}`, import.meta.url).href
}

export const getVideoUrl = (imageName: string | undefined) => {
  return new URL(`../assets/videos/${imageName}`, import.meta.url).href
}

export const getAudioUrl = (imageName: string | undefined) => {
  return new URL(`../assets/audio/${imageName}`, import.meta.url).href
}
