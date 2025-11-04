class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
  top() {
    if (this.isEmpty()) {
      return undefined;
    }
    console.log(this.items[this.items.length - 1]);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items.join(" "));
  }
}
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(40);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.print();
