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

export const placeholder = () => {
  let keys = [];
  for (let i = 0; i < 20; i++) {
    console.log(src.extended[i + Math.random(22, 67)]);
    keys.push(`Try "${src.extended[i + Math.random(22, 67)]}"`);
  }
  console.log(keys);
  return keys[Math.random(0, 20)];
};

export default acronym;
