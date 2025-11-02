export const calculateScore = (weather, perfume) => {
  let score = 0;
  
  // Temperature scoring
  if (weather.temp_c < 15) {
    score += perfume.isWarm ? 2 : 0;
  } else if (weather.temp_c > 25) {
    score += perfume.isLight ? 2 : 0;
  }
  
  // Weather condition scoring
  if (weather.condition.includes('rain')) {
    score += perfume.isWarm ? 1 : 0;
  }
  
  // Time of day scoring
  const hour = new Date().getHours();
  if (hour < 12) {
    score += perfume.isFresh ? 1 : 0;
  } else if (hour > 18) {
    score += perfume.isIntense ? 1 : 0;
  }
  
  return score;
};