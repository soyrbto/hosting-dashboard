function handleImageName(rawName) {
  let imageName;
  if (rawName) {
    imageName = rawName.replace(' ', '-').toLowerCase();
    return imageName;
  } else {
    return false;
  }
}

export { handleImageName };
