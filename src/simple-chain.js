const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	arr: [],
  getLength() {
		return this.arr.length;
  },
  addLink(value) {
		this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < this.arr.length && position > 0) {
      this.arr.splice(position - 1, 1)
    } else {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
		return this;
  },
  reverseChain() {
    this.arr.reverse();
		return this;
  },
  finishChain() {
    const arrRes = this.arr.join('~~');
    this.arr = [];
    return arrRes;
  }
};

module.exports = {
  chainMaker
};
