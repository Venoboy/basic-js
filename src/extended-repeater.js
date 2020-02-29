module.exports = function repeater(str, options) {
  if (str === null) str = 'null';
  else if (str === false) str = 'false';
  else str = str.toString();
  let repeatTimes = options.repeatTimes,
    separator = options.separator,
    additionRepeatTimes = options.additionRepeatTimes,
    additionSeparator = options.additionSeparator,
    addition;
  if (options.addition === null) addition = 'null';
  else if (options.addition === false) addition = 'false';
  else options.addition ? addition = options.addition.toString() : '';

  const repeatedArr = (str, times) => {
    let arr = str.split('~!'),
      result = [];
    for (let i = 1; i <= times; i++) {
      result.push(arr);
    }
    return result
  };

  let additionPart = repeatedArr((addition || ''), (additionRepeatTimes || 1)).join((additionSeparator || '|'));
  return repeatedArr((str + additionPart), (repeatTimes || 1)).join((separator || '+'))
}
  