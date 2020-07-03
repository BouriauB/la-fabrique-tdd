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

    });

    describe('#getAll', () => {
        it("Should return 2 roles",() => {
            //Arrange
            roleRepository.create(1,'admin')
            roleRepository.create(2,'moderator')
    
            //Act
            let result = roleRepository.getAll()

            //Assert
            assert.equal(Object.keys(result).length,2)
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
            assert.equal(result, 'moderator');
        });
    });

    describe('#update', () => {
        it("Should uptape a role", () => {
            //Arrange
            roleRepository.update(1,{
                role:'admin'
            });

            //Act
            let result = roleRepository.getById(1);

            //Assert
            assert.equal(result.role, 'admin');
        });
    });

    describe('#remove', () => {
        it("Should remove a role", () => {
            //Arrange
            roleRepository.delete(2,{
                role:'moderator'
            });

            //Act
            let result = roleRepository.getById(2);

            //Assert
            assert.equal(result, 'mmodetor');
        });

    });

});