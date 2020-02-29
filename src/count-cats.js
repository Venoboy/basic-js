module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.forEach(row => {
    row.forEach(value => {
      value === "^^" ? ++cats : null
    })
  });
  return cats
};
