class Model {
  constructor (props) {
    this._ = props;
    this._previous = props;
    this._changed = {};
    this._currentVersion = this.$versionKey ? props[this.$versionKey] : new Date();
  }

  get keys () {
    return Object.keys(this._);
  }

  get lastValues () {
    return this._previous;
  }

  set (key, value) {
    this._changed[key] = true;
    this._[name] = value;
  }

  get (key) {
    return this._[key];
  }

  toJSON () {
    return this._;
  }
}

module.exports = Model;
