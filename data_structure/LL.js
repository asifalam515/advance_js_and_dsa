class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}
const head = new Node(10);
const a = new Node(20);
const b = new Node(50);
head.next = a;
a.next = b;
let temp = head;
while (temp != null) {
  console.log(temp.value, " ");
  temp = temp.next;
}
