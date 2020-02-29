module.exports = function transform(arr) {
  if (!arr instanceof Array) throw Error;
  let result = [];
  arr.forEach((elem, id) => {
    if (elem !== '--discard-next' && elem !== '--discard-prev' && elem !== '--double-next' && elem !== '--double-prev'){
      if ((arr[id - 1] === '--discard-next' && arr[id + 1] === '--double-prev') ||
        (arr[id - 1] === '--double-next' && arr[id + 1] === '--discard-prev')) {
        result.push(elem);
      } else if (arr[id - 1] === '--discard-next' && arr[id + 1] === '--discard-prev') {
        result.pop();
      } else if (arr[id - 1] === '--discard-next' || arr[id + 1] === '--discard-prev') {}
      else if (arr[id - 1] === '--double-next' && arr[id + 1] === '--double-prev') {
        result = result.concat([elem, elem, elem])
      } else if (arr[id - 1] === '--double-next' || arr[id + 1] === '--double-prev') {
        result = result.concat([elem, elem])
      } else {
        result.push(elem)
      }
    }
  });
  return result
};
