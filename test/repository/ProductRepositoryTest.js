const assert = require('assert');
const ProductRepository = require('../../src/repository/ProductRepository');

describe('ProductRepository', () => {

    beforeEach(() => {
       //Arrange
       product = new ProductRepository;
    });

    describe('#create', () => {
        it('should return new product (Nominal case)', () => {
            //Arrange
            //Act
            product.create('1', {
                name: 'billard'
            });

            const result = product.getById('1');

            //Assert
            assert.equal(result.name, 'billard');
        });

        it('should raise error if the key is not defined', () => {
            //Arrange
            let result = false;

            //Act
            try{
                product.create();
            } catch (e) {
                result = true;
            }

            //Assert
            assert.equal(result, true);
        });

        it('should raise error if the value is not defined', () => {
            //Arrange
            let result = false;

            //Act
            try{
                product.create('1');
            } catch (e) {
                result = true;
            }

            //Assert
            assert.equal(result, true);
        });

        it('should raise error if the value {name} is not defined', () => {
            //Arrange
            let result = false;

            //Act
            try{
                product.create('1',{
                    name: undefined
                });
            } catch (e) {
                result = true;
            }

            //Assert
            assert.equal(result, true);
        });

        it('should raise error if the value {description} is not defined', () => {
            //Arrange
            let result = false;

            //Act
            try{
                product.create('1', {
                    description: undefined
                });
            } catch (e) {
                result = true;
            }

            //Assert
            assert.equal(result, true);
        });

        it('should raise error if the value {prize} is not defined', () => {
            //Arrange
            let result = false;

            //Act
            try{
                product.create('1', {
                    prize: undefined
                });
            } catch (e) {
                result = true;
            }

            //Assert
            assert.equal(result, true);
        });

        it('should raise error if the value {categoryId} is not defined', () => {
            //Arrange
            let result = false;

            //Act
            try{
                product.create('1', {
                    categoryId: undefined
                });
            } catch (e) {
                result = true;
            }

            //Assert
            assert.equal(result, true);
        });

        it('should used default value {image} if she is not defined', () => {
            //Arrange
            let result = false;

            //Act
            try{
                product.create('1', {
                    image: undefined
                });
            } catch (e) {
                result = true;
            }

            //Assert
            assert.equal(result, true);
        });

        it('should raise error if the value {userId} is not defined', () => {
            //Arrange
            let result = false;

            //Act
            try{
                product.create('1', {
                    userId: undefined
                });
            } catch (e) {
                result = true;
            }

            //Assert
            assert.equal(result, true);
        });

        it('should raise error if the value {categoryId} does not exist', () => {
            // Arrange
            let result = false;

            // Act

            try{
                product.create('1', {
                    categoryId: 1
                });
            } catch (e) {
                result = true;
            }

            // Assert
            assert.equal(result, true);

        });

        it('should raise error if the value {userId} does not exist', () => {
            // Arrange
            let result = false;

            // Act
            try{
                product.create('1', {
                    userId: 1
                });
            } catch (e) {
                result = true;
            }

            // Assert
            assert.equal(result, true);
        });
    });

    describe('#getById', () => {
        it(" should raise error if the id is not defined", () => {
            // Arrange
            let result = false;

            // Act
            try{
                product.getById();
            } catch (e) {
                result = true;
            }

            // Assert
            assert.equal(result, true);
        });

        it(" should return null if the id does not exist", () => {
            //Arrange
            //Act
            const result = product.getById('1');

            //Assert
            assert.strictEqual(result, null)
        });

        it("should return product with id '1'", () => {
            //Arrange
            product.create('1', {
                name: 'billard',
                description: 'Lorem ipsum dolor sit amet orci aliquam.',
                prize: 499.99,
                categoryId: 1,
                image: 'billard.jpg',
                userId: 1
            });
            //Act
            const result = product.getById('1');

            //Assert
            assert.strictEqual(result.id, 1)
        });
    });

    describe('#getAll', () => {
        it("should return empty list", () => {
            //Arrange
            //Act
            const result = product.getAll();

            //Assert
            assert.equal(JSON.stringify(result), JSON.stringify({}));
        });

        it("should not return empty list (with 2 entries)'", () => {
            //Arrange
            product.create('1', 'billard');
            product.create('2', 'flipper');

            //Act
            const result = product.getAll();

            //Assert
            assert.equal(Object.keys(result).length, 2);
        });
    });

    describe('#update', () => {
        // it('should return updated product (Nominal case)', () => {
        //     //Arrange
        //     product.create(1, {
        //         name: 'billard',
        //         description: 'Lorem ipsum dolor sit amet orci aliquam.',
        //         prize: 499.99,
        //         categoryId: 1,
        //         image: 'billard.jpg',
        //         userId: 1
        //     });
        //
        //     //Act
        //     product.update(1, {});
        //     const result = product.getById('1');
        //
        //     //Assert
        //     assert.equal(result.name, 'billard');
        // });

        it('should raise error if the id is not defined', () => {
            //Arrange
            let result = false;

            //Act
            try{
                product.update();
            } catch (e) {
                result = true;
            }

            //Assert
            assert.equal(result, true);
        });

        it('should raise error if the value is not defined', () => {
            //Arrange
            let result = false;

            //Act
            try{
                product.update(1);
            } catch (e) {
                result = true;
            }

            //Assert
            assert.equal(result, true);
        });

        it("should return 'billard moderne' if the value {name} is defined", () => {
            //Arrange
            product.create(1, {
                name: 'billard',
                description: 'Lorem ipsum dolor sit amet orci aliquam.',
                prize: 499.99,
                categoryId: 1,
                image: 'billard.jpg',
                userId: 1
            });

            let result = null;
            const expectedName = 'billard moderne';

            //Act
            product.update(1, {
                name: 'billard moderne'
            });

            result = product.getById(1);

            //Assert
            assert.equal(result.name, expectedName);
        });

        it("should return 'Un billard moderne' if the value {description} is defined", () => {
            //Arrange
            product.create(1, {
                name: 'billard',
                description: 'Lorem ipsum dolor sit amet orci aliquam.',
                prize: 499.99,
                categoryId: 1,
                image: 'billard.jpg',
                userId: 1
            });

            let result = null;
            const expectedDescription = 'Un billard moderne';

            //Act
            product.update(1, {
                description: 'Un billard moderne'
            });

            result = product.getById(1);

            //Assert
            assert.equal(result.description, expectedDescription);
        });

        it("should return 459.99 if the value {prize} is defined", () => {
            //Arrange
            product.create(1, {
                name: 'billard',
                description: 'Lorem ipsum dolor sit amet orci aliquam.',
                prize: 499.99,
                categoryId: 1,
                image: 'billard.jpg',
                userId: 1
            });

            let result = null;
            const expectedPrize = 459.99;

            //Act
            product.update(1, {
                prize: 459.99
            });

            result = product.getById(1);

            //Assert
            assert.equal(result.prize, expectedPrize);
        });

        it("should return 2 if the value {categoryId} is defined", () => {
            //Arrange
            product.create(1, {
                name: 'billard',
                description: 'Lorem ipsum dolor sit amet orci aliquam.',
                prize: 499.99,
                categoryId: 1,
                image: 'billard.jpg',
                userId: 1
            });

            let result = null;
            const expectedCategory = 2;

            //Act
            product.update(1, {
                categoryId: 2
            });

            result = product.getById(1);

            //Assert
            assert.equal(result.categoryId, expectedCategory);
        });

        it("should return 'billard-moderne.jpg' if the value {image} is defined", () => {
            //Arrange
            product.create(1, {
                name: 'billard',
                description: 'Lorem ipsum dolor sit amet orci aliquam.',
                prize: 499.99,
                categoryId: 1,
                image: 'billard.jpg',
                userId: 1
            });

            let result = null;
            const expectedImage = 'billard-moderne.jpg';

            //Act
            product.update(1, {
                image: 'billard-moderne.jpg'
            });

            result = product.getById(1);

            //Assert
            assert.equal(result.image, expectedImage);
        });

        it("should return 2 if the value {userId} is defined", () => {
            //Arrange
            product.create(1, {
                name: 'billard',
                description: 'Lorem ipsum dolor sit amet orci aliquam.',
                prize: 499.99,
                categoryId: 1,
                image: 'billard.jpg',
                userId: 1
            });

            let result = null;
            const expectedUser = 2;

            //Act
            product.update(1, {
                userId: 2
            });

            result = product.getById(1);

            //Assert
            assert.equal(result.userId, expectedUser);
        });

        it('should raise error if the value {categoryId} does not exist', () => {
            // Arrange
            product.create(1, {
                name: 'billard',
                description: 'Lorem ipsum dolor sit amet orci aliquam.',
                prize: 499.99,
                categoryId: 1,
                image: 'billard.jpg',
                userId: 1
            });

            let result = false;

            // Act

            try{
                product.update(1, {
                    categoryId: 2
                });
            } catch (e) {
                result = true;
            }

            // Assert
            assert.equal(result, true);

        });

        it('should raise error if the value {userId} does not exist', () => {
            // Arrange
            product.create(1, {
                name: 'billard',
                description: 'Lorem ipsum dolor sit amet orci aliquam.',
                prize: 499.99,
                categoryId: 1,
                image: 'billard.jpg',
                userId: 1
            });

            let result = false;

            // Act

            try{
                product.update(1, {
                    userId: 2
                });
            } catch (e) {
                result = true;
            }

            // Assert
            assert.equal(result, true);

        });
    });

    describe('#delete', () => {
        it(" should raise error if the id is not defined", () => {
            // Arrange
            let result = false;

            // Act
            try{
                product.delete();
            } catch (e) {
                result = true;
            }

            // Assert
            assert.equal(result, true);
        });

        it(" should raise error if the id does not exist", () => {
            //Arrange
            //Act
            const result = product.delete('1');

            //Assert
            assert.strictEqual(result, null)
        });

        it("should return null with id '1'", () => {
            //Arrange
            product.create(1, {
                name: 'billard',
                description: 'Lorem ipsum dolor sit amet orci aliquam.',
                prize: 499.99,
                categoryId: 1,
                image: 'billard.jpg',
                userId: 1
            });
            //Act
            product.delete(1);

            const result = product.getById(1);

            //Assert
            assert.strictEqual(result, null)
        });
    });

});