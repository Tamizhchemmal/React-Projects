export const addonecart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const deletonecart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
