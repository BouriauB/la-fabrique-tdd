const assert = require('assert');
const RoleRepository = require('../../src/repository/RoleRepository');



describe('RoleRepository', () => {

    beforeEach(() => {
        //Arrange
        role = new RoleRepository
    })
   

    describe('#getById', () => {
        it("Should have role",() => {
            //Arrange

            role.create('1','visiteur')
            role.create('2','admin')

            //Act
                const result = role.getById()

            //Assert
            assert.equal(Object.keys(result).length,2)
        });

    });

    describe('#getAll', () => {
        it("Should have 2 roles",() => {
            //Arrange
    
            role.create('1','visiteur')
            role.create('2','admin')

            //Act
                const result = role.getAll()

            //Assert
            assert.equal(Object.keys(result).length,2)
        });
    });

    describe('#create', () => {
        it("Should return new role", () => {
            //Arrange
            role.create('3', {
                role: "modérateur"});
            //Act
            const result = role.getById('3');
            //Assert
            assert.equal(result, 'modérateur');
        });
    });

    describe('#update', () => {
        it("Should uptape a role", () => {
            //Arrange
            role.update('3', {
                role: "modérateur"});
            //Act
            const result = role.getById('3');
            //Assert
            assert.equal(result, 'modérateur');
        });
    });

    describe('#remove', () => {

    });

});