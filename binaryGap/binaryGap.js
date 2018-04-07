const getBinaryFormatOfNumberAsString = number => (number >>> 0).toString(2);

const binaryGap = number => {
    const binaryFormat = (number >>> 0).toString(2); /*?.*/
    const binaryArray = Array.from(binaryFormat); /*?*/
    let zeroSequenceStarted = false;
    let currentSequenceOfZeros = 0;

    return binaryArray.reduce((largestBinaryGap, bitNumber, index) => {
        const isFirstSequence = bitNumber === '1' && !zeroSequenceStarted;
        const isEndOfZeroSequence = bitNumber === '1' && zeroSequenceStarted;
        const isZeroInCurrentSequence =
            bitNumber === '0' && zeroSequenceStarted;

        if (isFirstSequence) {
            zeroSequenceStarted = true;
        }

        if (isZeroInCurrentSequence) {
            currentSequenceOfZeros += 1;
        }

        if (isEndOfZeroSequence) {
            if (currentSequenceOfZeros > largestBinaryGap) {
                largestBinaryGap = currentSequenceOfZeros;
            }

            currentSequenceOfZeros = 0;
        }

        return largestBinaryGap;
    }, 0);
};

module.exports = {
    getBinaryFormatOfNumberAsString,
    binaryGap
};
