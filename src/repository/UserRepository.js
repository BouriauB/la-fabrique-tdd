module.exports = class UserRepository {

    constructor() {
        this._array = [];
    }

    create(id, firstname, lastname, email, password, roleId){
        if(id === undefined) {
            throw new Error();
        }
        if(firstname === undefined) {
            throw new Error();
        }
        if(lastname === undefined) {
            throw new Error();
        }
        if(email === undefined) {
            throw new Error();
        }
        if(password === undefined) {
            throw new Error();
        }
        if(roleId === undefined) {
            throw new Error();
        }
        if( this.getById(id) === undefined){
            throw new Error();
        }
        let dict = {};
        dict['id'] = id;
        dict['firstname'] = firstname;
        dict['lastname'] = lastname;
        dict['email'] = email;
        dict['password'] = password;
        dict['roleId'] = roleId;
        this._array.push(dict);
    }

    getById(id){
        if(this._array[id - 1 ] !== undefined){
            return this._array[id - 1];
        }
    }

    getAll(){
        return this._array;
    }
};
