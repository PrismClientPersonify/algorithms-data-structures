function insertionSort(items) {
  const result = [...items];

  for (let i = 1; i < result.length; i += 1) {
    const current = result[i];
    let j = i - 1;

    while (j >= 0 && result[j] > current) {
      result[j + 1] = result[j];
      j -= 1;
    }

    result[j + 1] = current;
  }

  return result;
}

function mergeSort(items) {
  if (items.length <= 1) return items;
  const middle = Math.floor(items.length / 2);
  const left = mergeSort(items.slice(0, middle));
  const right = mergeSort(items.slice(middle));
  const result = [];

  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }

  return result.concat(left, right);
}

function quickSort(items) {
  if (items.length <= 1) return items;
  const pivot = items[items.length - 1];
  const left = items.slice(0, -1).filter((value) => value <= pivot);
  const right = items.slice(0, -1).filter((value) => value > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

class Queue {
  constructor() { this.items = []; }
  enqueue(value) { this.items.push(value); }
  dequeue() { return this.items.shift(); }
}

class Stack {
  constructor() { this.items = []; }
  push(value) { this.items.push(value); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insert(root, value) {
  if (!root) return new TreeNode(value);
  if (value < root.value) root.left = insert(root.left, value);
  else root.right = insert(root.right, value);
  return root;
}

function leafValues(root, result = []) {
  if (!root) return result;
  if (!root.left && !root.right) result.push(root.value);
  leafValues(root.left, result);
  leafValues(root.right, result);
  return result;
}

const stack = new Stack();
stack.push('x');
stack.push('y');
stack.pop();
stack.push('z');
console.log('Верхушка стека:', stack.peek());

const queue = new Queue();
queue.enqueue('hello');
queue.enqueue('dog');
queue.enqueue(3);
queue.dequeue();
console.log('Очередь после dequeue:', queue.items);

const numbers = [17, 6, 8, 20, 13, 11, 4, 7, 19, 100, 1, 27, 5];
let tree = null;
for (const number of numbers) tree = insert(tree, number);
const leaves = leafValues(tree);
console.log('Листья дерева:', leaves);
console.log('Минимальный лист:', Math.min(...leaves));
console.log('Максимальный лист:', Math.max(...leaves));

const data = [8, 3, 7, 1, 5, 2, 9];
console.log('Insertion sort:', insertionSort(data));
console.log('Merge sort:', mergeSort(data));
console.log('Quick sort:', quickSort(data));
console.log('Сложность тройного цикла: O(N^3)');
