function getPropertyValue(obj, prop) {
  if (prop in obj) {
    return obj[prop];
  } else {
    return undefined;
  }
}

