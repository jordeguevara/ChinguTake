//months is a string
const months = {
  Jan: 31,
  Feb: 28,
  March: 30,
  April: 30,
  May: 30,
  June: 30,
  July: 30,
  Septemeber: 30,
  October: 31,
  November: 30,
  Decemeber: 31
};
export const getMonths = index => months[index];
