module.exports = class Category {

    constructor(name) {
        this._name = name;
    }

    _getName(){
      return this._name;
    };

    _setName(name){
        this._name = name;
    };
};