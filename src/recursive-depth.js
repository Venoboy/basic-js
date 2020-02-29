

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    const hasArray = (someArr) => {
      return someArr.some(elem => Array.isArray(elem))
    };
    if (hasArray(arr)) {
      let newArr = [];
      depth++;
      arr = arr.filter(elem => {
        return Array.isArray(elem)
      });
      arr.forEach(elem2 => {
        newArr.push(...elem2)
      });
      arr = newArr;
      newArr = [];
      depth = this.calculateDepth(arr, depth)
    } else return depth;
    return depth
  }
};