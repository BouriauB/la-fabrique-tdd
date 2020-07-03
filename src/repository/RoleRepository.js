module.exports = class RoleRepository {
    constructor () {
        this.role = {}
    }
    create(key,value){ 

        if(this.role === undefined){
            this.role = {}
            
        }

        this.role[key] = value

        if(key === undefined){
            throw new Error();
            
        }

        if(value === undefined){
            throw new Error();
            
        }
    }

    getById(id){
        if(this.role === undefined){
            this.role = {}
            
        }
        return this.role[id];
    }

    getAll(){
       return null
    }

    update(key,value){
        
        if(key === undefined){
            throw new Error();
            
        }

        if(value === undefined){
            throw new Error();
            
        }

        if(role === undefined){
            throw new Error();
            
        }
    }

    delete(key){
        return null;
    }

};