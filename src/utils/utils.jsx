export const objIsEmpty = obj => {
  if (!obj) {
    return true;
  }
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
};

export const objKeysAsArray = obj => {
  if (objIsEmpty(obj)) {
    return [];
  }
  const finalArray = [];
  for (let key in obj) {
    finalArray.push(key);
  }
  return finalArray;
}