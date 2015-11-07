let Colors = require('material-ui/lib/styles/colors');
let ColorManipulator = require('material-ui/lib/utils/color-manipulator');
let Spacing = require('material-ui/lib/styles/spacing');

Colors.BankAustria = {
  red: '#E2001A',
  blue: '#4077B2',
  lightGrey: '#F5F5F5',
  darkGrey: '#828282',
  grey: '#808080',
  white: '#FFFFFF',
  lightBlack: '#333',
  black: '#000000'
};

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.BankAustria.red,
    primary2Color: Colors.BankAustria.black,
    primary3Color: Colors.BankAustria.lightGrey,
    accent1Color: Colors.BankAustria.blue,
    accent2Color: Colors.BankAustria.lightGrey,
    accent3Color: Colors.BankAustria.darkGrey,
    textColor: Colors.BankAustria.lightBlack,
    alternateTextColor: Colors.BankAustria.white,
    canvasColor: Colors.BankAustria.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
  },
};


