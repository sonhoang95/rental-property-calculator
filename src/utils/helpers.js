const formatNumber = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const amountFormat = amount => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export { formatNumber, amountFormat };
