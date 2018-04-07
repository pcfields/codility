const getBinaryFormatOfNumberAsString = require('./binaryGap')
    .getBinaryFormatOfNumberAsString;
const binaryGap = require('./binaryGap').binaryGap;

describe('Binary format', () => {
    test('9 should have binary format of 1001', () => {
        const binary = getBinaryFormatOfNumberAsString(9);

        expect(binary).toEqual('1001');
    });

    test('15 should have binary format of 1111', () => {
        const binary = getBinaryFormatOfNumberAsString(15);

        expect(binary).toEqual('1111');
    });

    test('20 should have binary format of 10100', () => {
        const binary = getBinaryFormatOfNumberAsString(20);

        expect(binary).toEqual('10100');
    });

    test('529 should have binary format of 1000010001', () => {
        const binary = getBinaryFormatOfNumberAsString(529);

        expect(binary).toEqual('1000010001');
    });

    test('1041 should have binary format of 10000010001', () => {
        const binary = getBinaryFormatOfNumberAsString(1041);

        expect(binary).toEqual('10000010001');
    });
});

/**
 * Scenarios:
 *
 * 9 = 1001
 * binary gap = 2
 *
 * 15 = 1111
 * binary gap = 0
 *
 * 20 = 10100
 * binary gap = 1
 *
 * 1041 = 1000010001
 * binary gap = 4
 *
 * 1041 = 10000010001
 * binary gap = 4
 */

describe('Binary Length', () => {
    test('9 should have binary gap of length 2', () => {
        const gapLength = binaryGap(9);

        expect(gapLength).toBe(2);
    });

    test('15 should have binary gap of length 0', () => {
        const gapLength = binaryGap(15);

        expect(gapLength).toBe(0);
    });

    test('20 should have binary gap of length 1', () => {
        const gapLength = binaryGap(20);

        expect(gapLength).toBe(1);
    });

    test('529 should have binary gap of length 4', () => {
        const gapLength = binaryGap(529);

        expect(gapLength).toBe(4);
    });

    test('1041 should have binary gap of length 5', () => {
        const gapLength = binaryGap(1041);

        expect(gapLength).toBe(5);
    });
});
