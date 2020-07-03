module.exports = class CategoryRepository {
    constructor() {
        this._array = [];  //expected_array = [ { id: 1, name: "billard" }, { id: 2, name: "baby-foot" } ]
    }

    create(id, name){

        if(id === undefined) {
            throw new Error();
        }

        if(name === undefined) {
            throw new Error();
        }

        if( this._array[id - 1] !== undefined){
            throw new Error();
        }

        let category = {};
        category['id'] = id;
        category['name'] = name;
        this._array.push(category);
    }

    update(id, name){
        if(id === undefined) {
            throw new Error();
        }

        if(name === undefined) {
            throw new Error();
        }
        let category = this.getById(id);
        if( this._array[id - 1] !== undefined){
            throw new Error();
        }
        category['id'] = id;
        category['name'] = name;
        this._array.push(category);
    }

    delete(id){
        this.getById(id);
        if(id === undefined) {
            throw new Error();
        }
        this._array.slice(id-1,1)
    };

    getById(id){
        if(this._array[id - 1] !== undefined){
            return this._array[id - 1];
        }
        else {
            throw new Error();
        }
    };

    getAll(){
        return this._array;
    }

}