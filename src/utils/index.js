export const max = 5;
export const min = 1;

export const findObj = (array, id) => array.find((o) => o.id === id);

export const copyArray = (array) =>
  array.map((o) => {
    return { ...o };
  });
