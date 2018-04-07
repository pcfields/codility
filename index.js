const binaryGap = require('./binaryGap/binaryGap').binaryGap;
const solution = binaryGap;

binaryGap(9); /*?*/
binaryGap(15); /*?*/
binaryGap(529); /*?*/
binaryGap(20); /*?*/
binaryGap(1041); /*?*/

solution('peter'); /*? */
solution('skjfkdlsfjlksdfj'); /*?*/
solution(529); /*?*/
solution(20); /*?*/
solution(1041); /*?*/

/**
 * For binary number 1000010001
 * When I encounter a 1
 * Count the next zeros
 * Until i get to another 1
 * And save that sequence of zeros
 * As Binary gap
 *
 */
