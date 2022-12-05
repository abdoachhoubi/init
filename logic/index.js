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

export default acronym;
