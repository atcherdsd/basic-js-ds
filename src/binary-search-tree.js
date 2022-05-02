const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor() {
    this.rRoot = null;
  }

  root() {
    return this.rRoot;
  }

  add(data) {
    this.rRoot = addInside(this.rRoot, data);

    function addInside(node, data) {
      if (!node)
        return new Node(data);
      if (node.data === data)
        return node;
      
      if (data < node.data)
        node.left = addInside(node.left, data);
      else
        node.right = addInside(node.right, data);

      return node;
    }
  }

  has(data) {
    return searchInside(this.rRoot, data);

    function searchInside(node, data) {
      if (!node)
        return false;
      if (node.data === data)
        return true;
      
      return data < node.data ? searchInside(node.left, data) : searchInside(node.right, data);
    }
  }

  find(data) {
    return this.has(data) ? findNode(this.rRoot, data) : null;

    function findNode(node, data) {
      if (!node)
        return null;
      if (node.data === data)
        return node;
      
      return data < node.data 
      ? (node = findNode(node.left, data)) 
      : (node = findNode(node.right, data));
    }
  }

  remove(data) {
    this.rRoot = removeNode(this.rRoot, data);

    function removeNode(node, data) {
      if (!node)
        return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right)
          return null;
      }
        
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }

      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;
      node.right = removeNode(node.right, minFromRight.data);
      return node;
    }
  }

  min() {
    if (!this.rRoot)
      return;
    let node = this.rRoot;
    while (node.left)
      node = node.left;
    return node.data;
  }

  max() {
    if (!this.rRoot)
      return;
    let node = this.rRoot;
    while (node.right)
      node = node.right;
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};