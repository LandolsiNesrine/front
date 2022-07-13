const itemsPerPage = 10;
const options = [
  itemsPerPage,
  ...Array.from(
    { length: 4 },
    (_, i) => Math.pow(itemsPerPage, 2) * Math.pow(2, i)
  ),
];

export const pagination = { itemsPerPage, options };
