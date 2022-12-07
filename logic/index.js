import src from "../res";

const search = (arr, keyword) => {
  const res = arr.filter((e) => e.key.toUpperCase() === keyword && e.value);
  return res;
};

const acronym = (keyword) => {
  const offensive = search(src.offensive, keyword);
  const extended = search(src.extended, keyword);
  const complicated = search(src.complicated, keyword);
  return { offensive, extended, complicated };
};
const ft_rand_range = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const placeholder = () => {
  let keys = [];
  for (let i = 0; i < 20; i++) {
    keys.push(`Try "${src.extended[i + ft_rand_range(22, 67)].key}"`);
  }
  return keys[ft_rand_range(0, 20)];
};

export default acronym;
