module.exports = function getSeason(date) {
  const winter = [11, 0, 1],
    spring = [2, 3, 4],
    summer = [5, 6, 7],
    autumn = [8, 9, 10];

  if (!date) return 'Unable to determine the time of year!';
  else if (!(Object.prototype.toString.call(date) === '[object Date]')) throw Error;

  const month = date.getMonth();

  switch (true) {
    case winter.includes(month):
      return 'winter';
    case spring.includes(month):
      return 'spring';
    case summer.includes(month):
      return 'summer';
    case autumn.includes(month):
      return 'autumn';
  }
};
