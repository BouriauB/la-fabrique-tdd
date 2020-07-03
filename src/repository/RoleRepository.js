module.exports = class RoleRepository {
    constructor () {
        this.role = {}
    }
    create(key,value){ 
        
        this.role[key] = value

        if(key === undefined){
            throw new Error();
            
        }

        if(value === undefined){
            throw new Error();
            
        }
    }

    getById(id){
        return this.role[id];
    }

    getAll(){
       return this.role
    }

    update(key,value){
        
        if(key === undefined){
            throw new Error();
            
        }

        if(value === undefined){
            throw new Error();
            
        }

        
    }

    delete(key){
        return null;
    }

};