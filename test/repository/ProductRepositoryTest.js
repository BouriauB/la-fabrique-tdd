const assert = require('assert');
const ProductRepository = require('../../src/repository/ProductRepository');

describe('ProductRepository', () => {

    describe('#getById', () => {
        it(" should raise error if the id is not defined", () => {

        });

        it(" should raise error if the id does not exist", () => {

        });

        it("should return product with id '1'", () => {

        });
    });

    describe('#getAll', () => {
        it("should return empty list", () => {
            //Arrange
            const productRepository = new ProductRepository;
            //Act
            const result = productRepository.getAll();

            //Assert
            assert.equal(JSON.stringify(result), JSON.stringify({}));
        });

        it("should not return empty list (with 2 entries)'", () => {
            //Arrange
            const productRepository = new ProductRepository;

            productRepository.create('1', 'billard');
            productRepository.create('2', 'flipper');

            //Act
            const result = productRepository.getAll();

            //Assert
            assert.equal(Object.keys(result).length, 2);
        });
    });

    describe('#create', () => {
        it('should return new key (Nominal case)', () => {
            // Arrange
            // Act
            // Assert
        });

        it('should raise error if the key is not defined', () => {
            // Arrange
            // Act
            // Assert
        });

        it('should raise error if the value is not defined', () => {
            // Arrange
            // Act
            // Assert
        });

        it('should raise error if the value {name} is not defined', () => {
            // Arrange
            // Act
            // Assert
        });

        it('should raise error if the value {description} is not defined', () => {
            // Arrange
            // Act
            // Assert
        });

        it('should raise error if the value {prize} is not defined', () => {
            // Arrange
            // Act
            // Assert
        });

        it('should raise error if the value {categoryId} is not defined', () => {
            // Arrange
            // Act
            // Assert
        });

        it('should used default value {image} if she is not defined', () => {
            // Arrange
            // Act
            // Assert
        });

        it('should raise error if the value {userId} is not defined', () => {
            // Arrange
            // Act
            // Assert
        });

        it('should raise error if the value {categoryId} does not exist', () => {
            // Arrange
            // Act
            // Assert
        });

        it('should raise error if the value {userId} does not exist', () => {
            // Arrange
            // Act
            // Assert
        });
    });

    describe('#update', () => {
        it('should raise error if the id is not defined', () => {
            // Arrange
            // Act
            // Assert
        });
    });

    describe('#remove', () => {
        it('should raise error if the id is not defined', () => {
            // Arrange
            // Act
            // Assert
        });
    });

});