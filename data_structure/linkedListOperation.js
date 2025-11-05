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
    // if the linked list is empty
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }
  insert(position, value) {
    // insert at specific index. (where , what)
    // if user says ultapalta index
    const newNode = new Node(value);
    if (position < 1 || position > this.length + 1) {
      console.log("don't give ulta palta index");
      return;
    }
    // insert at the beginning
    if (position === 1) {
      // insert at first poistion
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) {
        this.tail = newNode;
      }
      this.length++;
      return;
    }
    // insert at the middle
    let temp = this.head;
    if (position < this.length) {
      for (let i = 1; i < position - 1; i++) {
        temp = temp.next;
      }
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
    }
    // if we had to insert at tail
    if (position === this.length + 1) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
  }
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
myLL.insert(1, 500);
myLL.insert(2, 1500);
myLL.print();
