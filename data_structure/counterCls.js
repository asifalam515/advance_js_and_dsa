class Counter {
  constructor(count) {
    this.count = count;
  }
  sayCount(count) {
    console.log("your count is ", this.count);
  }
  addTen(value) {
    this.count += value;
  }
}
const counter1 = new Counter(1);
const counter2 = new Counter(234);
counter1.addTen(10);
counter1.sayCount();
