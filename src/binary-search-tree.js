const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.items = {};
  }
  root(value) {
    if (!value)
      return null;
    return this.root;
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  find(value) {
    if (this.has(value))
      return this.items[value];
    return null;
  }

  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  min() {
    if (this.items)
      return Math.min(Object.keys(this.items));
  }

  max() {
    if (this.items)
      return Math.max(Object.keys(this.items));
  }
}

module.exports = {
  BinarySearchTree
};