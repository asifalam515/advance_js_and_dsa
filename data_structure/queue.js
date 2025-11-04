// array implementation
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }
  top() {
    if (this.isEmpty()) {
      return undefined;
    }
    console.log(this.items[0]);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items.join(" -> "));
  }
}

const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(40);
myQueue.top();
myQueue.print();
