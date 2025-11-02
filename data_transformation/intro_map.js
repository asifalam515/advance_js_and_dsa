const studentsMap = new Map();
studentsMap.set(1, "asif");
studentsMap.set(2, "sakib");
studentsMap.set(3, "rakib");
studentsMap.set(4, "najmul");

studentsMap.forEach((value, key) => {
  console.log("key", key, "value", value);
});
