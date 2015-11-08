import Model from './model.js';

class User extends Model {
  constructor (props) {
    super({
      userId: props.userId,
      firstName: props.firstName,
      lastName: props.lastName,
      gender: props.gender,
      title: props.title,
      birthdate: props.birthdate,
      nationality: props.nationality,
      address: new UserAddress(props.address),
      email: props.email,
      phone: props.phone,
      mobile: props.mobile,
      preferredLanguage: props.preferredLanguage,
      lastLogin: props.lastLogin
    });
  }
}

class UserAddress extends Model {
  constructor (props) {
    super({
      street: props.street,
      streetNumber: props.streetNumber,
      postCode: props.postCode,
      city: props.city,
      stateProvince: props.stateProvince,
      country: props.country
    });
  }
}

module.exports = User;
