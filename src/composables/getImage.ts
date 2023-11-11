export const getImageUrl = (imageName: string | undefined, imageFolder: string = 'work') => {
  return new URL(`../assets/images/${imageFolder}/${imageName}`, import.meta.url).href
}
