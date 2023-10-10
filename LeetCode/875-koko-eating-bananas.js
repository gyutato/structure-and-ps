/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function (piles, h) {
  let lo = 1;
  let hi = Math.max(...piles);
  let mid;

  while (lo < hi) {
    mid = lo + Math.floor((hi - lo) / 2);
    const time = piles.reduce((acc, pile) => {
      const count = Math.ceil(pile / mid);
      return acc + count;
    }, 0);

    if (time > h) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  mid = lo + Math.floor((hi - lo) / 2);
  return mid;
};
