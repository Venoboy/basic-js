const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let age = 0,
    l = 0.693/HALF_LIFE_PERIOD;

  if (typeof(sampleActivity) != "string" || isNaN(parseFloat(sampleActivity)) || +sampleActivity <= 0) return false;
  else {
    age = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / l);
    return age >= 0 ? age : false;
  }
};
