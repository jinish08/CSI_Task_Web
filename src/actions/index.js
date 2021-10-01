export const addId = (num) => {
  return {
    type: "ADDID",
    payload: num,
  };
};

export const delId = (num) => {
  return {
    type: "DELID",
    payload: num,
  };
};
