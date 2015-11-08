module.exports = {
  currency: formatCurrency,
  date: formatDate
};

function formatCurrency (number) {
  var text = number + '';
  if (text.indexOf('.') < 0) {
    text = text + ',00';
  } else {
    text = (number + '0').replace(/\.(\d\d)0?$/, ',$1');
  }
  text = text.replace(/(\d)(\d{3}),/, '$1.$2,').replace(/(\d{3})\./, '$1.');
  return text;
}

function formatDate (datestr) {
  // YYYY-mm-dd -> dd.mm.YYYY
  return datestr.substr(8, 2) + '.' + datestr.substr(5, 2) + '.' + datestr.substr(0, 4);
}
