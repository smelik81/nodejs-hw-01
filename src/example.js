export const getCurrentMonth = () => {
  const now = new Date();
  return now.getMonth() + 1;
};
