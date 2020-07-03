const assert = require('assert');
const RoleRepository = require('../../src/repository/RoleRepository');



describe('RoleRepository', () => {

    beforeEach(() => {
        //Arrange
        roleRepository = new RoleRepository
    })
   

    describe('#getById', () => {
        it("Should return role",() => {
            //Arrange
            roleRepository.create(1,{
                role:'admin'
            });

            //Act
            let result = roleRepository.getById(1)

            //Assert
            assert.equal(result.role,'admin' )
        });

        it("Should raise error if the value{role} does not exist",() => {
         //Arrange 
         let result = false;

         //Act
         try{

         } catch(e) {
             result = true;
         }
         //Assert
         assert.equal(result,true);
     });

        it("Should raise error if the role is not defined",() => {
            //Arrange 
            let result = false;

            //Act
            try{
                roleRepository.create();
            } catch(e) {
                result = true;
            }
            //Assert
            assert.equal(result,true);
        });

    });

    describe('#getAll', () => {
        it("Should return 2 roles",() => {
            //Arrange
            roleRepository.create(1,'admin')
            roleRepository.create(2,'moderator')
    
            //Act
            let result = roleRepository.getAll()

            //Assert
            assert.equal(JSON.stringify(result), JSON.stringify({}))
        });

        it("Should raise error if one role is not defined",() => {
            //Arrange 
            let result = false;

            //Act
            try{
                roleRepository.create(1,{
                    role: 'admin'
                    
                }
                );
                roleRepository.create();
            } catch(e) {
                result = true;
            }
            //Assert
            assert.equal(result,true);
        });
    });

    describe('#create', () => {
        it("Should return new role", () => {
            //Arrange
            roleRepository.create(2,{
                role:'moderator'
            });

            //Act
            let result = roleRepository.getById(2);

            //Assert
            assert.equal(result.role, 'moderator');
        });

        it("Should raise error if the value{role} is not defined", () => {
            //Arrange 
            let result = false;

            //Act
            try{
                roleRepository.create(1,{
                    role: undefined
                });
            } catch(e) {
                result = true;
            }
            //Assert
            assert.equal(result,true);
        });

        it("Should raise error if the key is not defined", () => {
            //Arrange 
            let result = false;

            //Act
            try{
                roleRepository.create();
            } catch(e) {
                result = true;
            }
            //Assert
            assert.equal(result,true);
        });

        it("Should raise error if the value is not defined", () => {
            //Arrange 
            let result = false;

            //Act
            try{
                roleRepository.create(1);
            } catch(e) {
                result = true;
            }
            //Assert
            assert.equal(result,true);
        });
    });

    describe('#update', () => {
        it("Should uptape a role", () => {
            //Arrange
            roleRepository.create(1,{
                role:'admin'
            });
            
            roleRepository.update(1,{
                role:'moderator'
            });

            //Act
            let result = roleRepository.getById(1);

            //Assert
            assert.equal(result.role, 'admin');
        });

        it("Should raise error if the value{role} is not defined", () => {
            //Arrange 
            let result = false;

            //Act
            try{
                roleRepository.update(1,{
                    role: undefined
                });
            } catch(e) {
                result = true;
            }
            //Assert
            assert.equal(result,true);
        });

        it("Should raise error if the key is not defined", () => {
            //Arrange 
            let result = false;

            //Act
            try{
                roleRepository.update();
            } catch(e) {
                result = true;
            }
            //Assert
            assert.equal(result,true);
        });

        it("Should raise error if the value is not defined", () => {
            //Arrange 
            let result = false;

            //Act
            try{
                roleRepository.update(1);
            } catch(e) {
                result = true;
            }
            //Assert
            assert.equal(result,true);
        });
    });

    describe('#remove', () => {
        it("Should remove a role", () => {
            //Arrange
            roleRepository.create(2,{
                role:'moderator'
            });
            
            roleRepository.delete(2,{
                role:'moderator'
            });

            //Act
            let result = roleRepository.getById(2);

            //Assert
            assert.equal(result.role, 'moderator');
        });

    });

});