const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
	// const newArr = arr.map(item => +item);
	// const arrMin = Math.min(...newArr);
	// const i = newArr.indexOf(arrMin);

	// if (i !== -1) {
	// 	newArr.splice(i, 1);
	// }
	// return +newArr.join('');

	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		arr.splice(i, 1);
    newArr.push(+arr.join(''));
    arr = n.toString().split('');
	};
	return Math.max(...newArr);
}

module.exports = {
  deleteDigit
};
