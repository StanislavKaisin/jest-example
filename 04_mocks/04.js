function map(array, callback) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const element = callback(array[index]);
    result.push(element);
  }
  return result;
}

module.exports = { map };
