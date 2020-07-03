const assert = require('assert');
const CategoryRepository = require('../../src/repository/CategoryRepository');

describe('CategoryRepository', () => {
    beforeEach(() => {
        categoryRepository = new CategoryRepository();
    });
    describe('#create', () => {
        it("new object is add", () => {
            //arrange
            const expected_name = "pepito";
            //act
            categoryRepository.create(1, "pepito");
            let category = categoryRepository.getById(1);
            //assert
            assert.equal(category.name, expected_name);
        });

        it("new object has not been add no key", () => {
            //act
            try {
                categoryRepository.create(undefined, "pepito");
            } catch (e){
                res = true
            }
            //assert
            assert.throws(categoryRepository.create);
        });

        it("new object has not been add no value", () => {
            //act
            try {
                categoryRepository.create(1, undefined);
            } catch (e){
                res = true
            }
            //assert
            assert.throws(categoryRepository.create);
        });
    });

    describe('#update', () => {
        it("update object", () => {
            //arrange
            const expected_name = "topito";
            categoryRepository.create(1, "pepito");
            let category_created = categoryRepository.getById(1);
            //act
            categoryRepository.update(category_created.id, "topito");
            let category_updated = categoryRepository.getById(1);
            //assert
            assert.equal(category_updated.name, expected_name);
        });

        it("update object has no value", () => {
            //act
            categoryRepository.create(1, "pepito");
            let category_created = categoryRepository.getById(1);
            try {
                categoryRepository.update(category_created.id, undefined);
            } catch (e){
                res = true
            }
            //assert
            assert.throws(categoryRepository.update);
        });
    });

    describe('#delete', () => {
        it("delete object", () => {
            //arrange
            categoryRepository.create(1, "pepito");
            //act
            categoryRepository.delete(1);
            try {
                categoryRepository.getById(1);
            } catch (e){
                res = true
            }
            //assert
            assert.throws(categoryRepository.getById);
        });
        it("delete object but object not exist", () => {
            //act
            try {
                categoryRepository.delete(1);
            } catch (e){
                res = true
            }
            //assert
            assert.throws(categoryRepository.delete);
        });
        it("delete object but id in param", () => {
            //act
            try {
                categoryRepository.delete(undefined);
            } catch (e){
                res = true
            }
            //assert
            assert.throws(categoryRepository.delete);
        });
    });

    describe('#getById', () => {
        it("get object added but no id", () => {
            //arrange
            categoryRepository.create(1, "pepito");
            //act
            try {
                categoryRepository.getById();
            } catch (e){
                res = true
            }
            //assert
            assert.throws(categoryRepository.create);
        });
    });

    describe('#getAll', () => {
        it("return empty list", () => {
            //arrange
            const expected_data = [];
            let result = null;
            //act
            result = categoryRepository.all()
            //assert
            assert.equal(JSON.stringify(result), JSON.stringify(expected_data))
        });

        it("return fill list", () => {
            //arrange
            const expected_data = [{1: 'baby-foot'}, {2: 'billard'}];
            let result = null;
            //act
            result = categoryRepository.all()
            //assert
            assert.equal(JSON.stringify(result), JSON.stringify(expected_data))
            assert.equal(JSON.stringify(result).length, JSON.stringify(expected_data).length)
        });
    });

});