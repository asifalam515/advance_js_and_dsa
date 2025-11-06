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
    this.size = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.size === 0 || this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.size === 0 || this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return;
  }
  insertAtAnyPosition(position, value) {
    const newNode = new Node(value);
    if (position < 1 || position > this.size + 1) {
      console.log(" i can 't add heere");
      return;
    }
    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.size === 0) {
        this.tail = newNode;
      }
      this.size++;
      return;
    }
    let currentNode = this.head;
    for (let i = 1; i < position - 1; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.size++;
    return;
  }
  print() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}
const myLL = new LinkedList();
myLL.prepend(150);
myLL.append(50);
myLL.insertAtAnyPosition(1, 12);
myLL.print();
