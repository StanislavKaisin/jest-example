class Lodash {
  compact(array) {
    // return array.filter((elem) => {
    //   // console.log("elem=", elem);
    //   if (elem) {
    //     console.log("elem=", elem);
    //     return elem;
    //   }
    return array.filter((elem) => {
      return !!elem;
    });
  }
  groupBy(array, prop) {
    return array.reduce((acc, i) => {
      const key = typeof prop === "function" ? prop(i) : i[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(i);
      return acc;
    }, {});
  }
}

module.exports = Lodash;
