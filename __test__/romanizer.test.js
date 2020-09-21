import {transform,transformByromanizer} from "../src/romanizer";

describe('transform', () => {
    it('should return "X" when input 10', () => {
        const transformer = transform(10);

        expect(transformer).toEqual("X");
        const transformerByromanizer = transformByromanizer(10);
        expect(transformerByromanizer).toEqual("X")
    });


});