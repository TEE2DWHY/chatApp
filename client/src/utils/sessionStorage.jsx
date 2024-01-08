export const sessionStorageUtil = {
  setItem: (key, value) => {
    sessionStorage.setItem(key, value);
  },

  getItem: (key) => {
    const item = sessionStorage.getItem(key);
    return item;
  },

  deleteItem: (...keys) => {
    keys.forEach((item) => {
      sessionStorage.removeItem(item);
    });
  },
};
