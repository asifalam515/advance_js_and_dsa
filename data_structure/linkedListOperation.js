class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    // if the linkedlist is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the linkedList not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  insert() {}
  remove() {}
  print() {
    let temp = this.head;
    let arr = [];
    while (temp != null) {
      arr.push(temp.value);
      temp = temp.next;
    }
    console.log(arr.join(" -> "));
  }
}
const myLL = new LinkedList();
myLL.append(10);
myLL.append(20);
myLL.append(3);
myLL.prepend(1000);
myLL.print();
