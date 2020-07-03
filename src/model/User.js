module.exports = class User {

    constructor(firstname, lastname, email, password, roleId) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._password = password;
        this._roleId = roleId;
    }

    _getFirstName(){
      return this._firstname;
    };

    _setFirstName(firstname){
        this._firstname = firstname;
    };

    _getLastName(){
      return this._lastname;
    };

    _setLastName(lastname){
        this._lastname = lastname;
    };

    _getEmail(){
      return this._email;
    };

    _setEmail(email){
        this._email = email;
    };

    _getPassword(){
      return this._password;
    };

    _setPassword(password){
        this._password = password;
    };

    _getRoleId(){
      return this._roleId;
    };

    _setRoleId(roleId){
        this._roleId = roleId;
    };


};