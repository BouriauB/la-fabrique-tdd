const assert = require('assert');
const CategoryRepository = require('../../src/repository/CategoryRepository');

describe('CategoryRepository', () => {
    beforeEach(() => {
        categoryRepository = new CategoryRepository();
        let result = false;
    });
    describe('#create', () => {
        it("Should create category", () => {
            //arrange
            const expectedName = "billard";
            //act
            categoryRepository.create(1, "billard");
            let category = categoryRepository.getById(1);
            //assert
            assert.equal(category.name, expectedName);
        });

        it("Should raise error when create category with no key", () => {
            //act
            try {
                categoryRepository.create(undefined, "billard");
            } catch (e){
                result = true;
            }
            //assert
            assert.equal(result, true);
        });

        it("Should raise error when create category with no value", () => {
            //act
            try {
                categoryRepository.create(1, undefined);
            } catch (e){
                result = true;
            }
            //assert
            assert.equal(result, true);
        });
    });

    describe('#update', () => {
        it("Should update name of category", () => {
            //arrange
            const expectedName = "billard";
            categoryRepository.create(1, "baby-foot");
            let categoryCreated = categoryRepository.getById(1);
            //act
            categoryRepository.update(categoryCreated['id'], "billard");
            let categoryUpdated = categoryRepository.getById(1);
            //assert
            assert.equal(categoryUpdated.name, expectedName);
        });

        it("Should raise error when update category with no value", () => {
            //arrange
            //act
            categoryRepository.create(1, "billard");
            let categoryCreated = categoryRepository.getById(1);
            try {
                categoryRepository.update(categoryCreated.id, undefined);
            } catch (e){
                result = true;
            }
            //assert
            assert.equal(result, true);
        });
    });

    describe('#delete', () => {
        it("delete category", () => {
            //arrange
            categoryRepository.create(1, "billard");
            //act
            categoryRepository.delete(1);
            try {
                categoryRepository.getById(1);
            } catch (e){
                result = true;
            }
            //assert
            assert.equal(result, true);
        });
        it("Should raise error when delete category but category not exist", () => {
            //arrange
            //act
            try {
                categoryRepository.delete(1);
            } catch (e){
                result = true;
            }
            //assert
            assert.equal(result, true);
        });
        it("Should raise error when delete category but no id in param", () => {
            //arrange
            //act
            try {
                categoryRepository.delete(undefined);
            } catch (e){
                result = true;
            }
            //assert
            assert.equal(result, true);
        });
    });

    describe('#getById', () => {
        it("Should raise error when getByID with no id ", () => {
            //arrange
            categoryRepository.create(1, "billard");
            //act
            try {
                categoryRepository.getById();
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
            let categoryList = null;
            //act
            categoryList = categoryRepository.getAll()
            //assert
            assert.equal(JSON.stringify(categoryList), JSON.stringify(expectedData))
        });

        it("Should return fill list", () => {
            //arrange
            const expectedData = [{'id': 1, 'name': 'baby-foot'}, {'id': 2, 'name': 'billard'}];
            let categoryList = null;
            categoryRepository.create(1, "baby-foot");
            categoryRepository.create(2, "billard");
            //act
            categoryList = categoryRepository.getAll()
            //assert
            assert.equal(JSON.stringify(categoryList), JSON.stringify(expectedData))
            assert.equal(Object.keys(categoryList).length, 2)
        });
    });
});
