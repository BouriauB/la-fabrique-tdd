const assert = require('assert');
const UserRepository = require('../../src/repository/UserRepository');

describe('UserRepository', () => {
    beforeEach(() => {
        userRepository = new UserRepository();
        let result= false;
    });
    describe('#create', () => {

        it ("should create a user", () => {
            //Arrange
            //Act
            userRepository.create(
                id=1,
                firstname='michel',
                lastname='durand',
                email='test@testmail.com',
                password='password',
                roleId=1,
            );

            //Assert
            const result = userRepository.getById(1)
            assert.equal(result.firstname, 'michel')
            assert.equal(result.lastname, 'durand')
            assert.equal(result.email, 'test@testmail.com')
            assert.equal(result.password, 'password')
            assert.equal(result.roleId, 1)

        })

        it ("should raise error if the firstname is unfilled", () => {
            
            //Arrange
            
            //Act
            try {
                userRepository.create(
                    id=1,
                    firstname=undefined,
                    lastname='durand',
                    email='test@testmail.com',
                    password='password',
                    roleId=1,
                );
            } catch (e){
                result = true;
            }
            //Assert
            assert.equal(result, true);
        })

        it ("should raise error if the lastname is filled", () => {
            
            //Arrange
            
            //Act
            try {
                userRepository.create(
                    id=1,
                    firstname='michel',
                    lastname=undefined,
                    email='test@testmail.com',
                    password='password',
                    roleId=1,
                );
            } catch (e){
                result = true;
            }
            //Assert
            assert.equal(result, true);
        })
                 
        it ("should raise error if the email is unfilled", () => {
            
            //Arrange
            
            //Act
            try {
                userRepository.create(
                    id=1,
                    firstname='michel',
                    lastname='durand',
                    email=undefined,
                    password='password',
                    roleId=1,
                )
            } catch (e){
                result = true;
            }
            //Assert
            assert.equal(result, true);
        })

        it ("should raise error if the password is unfilled", () => {
            //Arrange
            //Act
            try {
                userRepository.create(
                    id=1,
                    firstname='michel',
                    lastname='durand',
                    email='test@testmail.com',
                    password=undefined,
                    roleId=1,
                );
            } catch (e){
                result = true;
            }
            //Assert
            assert.equal(result, true);
            }
        );

        it ("should raise error if the roleId is unfilled", () => {
            
            //Arrange
            
            //Act
            try {
                userRepository.create(
                    id=1,
                    firstname='michel',
                    lastname='durand',
                    email='test@testmail.com',
                    password='password',
                    roleId=undefined,
                );
            } catch (e){
                result = true;
            }
            //Assert
            assert.equal(result, true);
        })
    });


    describe('#getById', () => {
        it("Should raise error when getByID with no id ", () => {
            //arrange
            userRepository.create(
                id=1,
                firstname='michel',
                lastname='durand',
                email='test@testmail.com',
                password='password',
                roleId=1,
            );
            //act
            try {
                userRepository.getById();
            } catch (e){
                result = true;
            }
            //assert
            assert.equal(result, true);
        });

    });

    describe('#getAll', () => {
        it("Should return empty list", () => {
            //arrange
            const expectedData = [];
            let userList = null;
            //act
            userList = userRepository.getAll()
            //assert
            assert.equal(JSON.stringify(userList), JSON.stringify(expectedData))
        });

        it("Should return fill list", () => {
            //arrange
            const expectedData = [{
                id: 1,
                firstname: 'michel',
                lastname: 'durand',
                email: 'test@testmail.com',
                password: 'password',
                roleId: 1,

            },
            {
                id: 2,
                firstname: 'bertrand',
                lastname: 'dupont',
                email: 'try@testmail.com',
                password: 'azerty',
                roleId: 2,
            }];
            let userList = null;
            userRepository.create(
                id=1,
                firstname='michel',
                lastname='durand',
                email='test@testmail.com',
                password='password',
                roleId=1,
                );
            userRepository.create(
                id=2,
                firstname='bertrand',
                lastname='dupont',
                email='try@testmail.com',
                password='azerty',
                roleId=2,
                );
            //act
            userList = userRepository.getAll()
            //assert
            assert.equal(JSON.stringify(userList), JSON.stringify(expectedData))
            assert.equal(Object.keys(userList).length, 2)
        });
    });
});