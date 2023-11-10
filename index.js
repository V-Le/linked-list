import Linkedlist from "./linkedlist.js";

const linkedlist = new Linkedlist();
linkedlist.append('data1');
linkedlist.append('data2');
linkedlist.append('data3');
linkedlist.append('data4');
linkedlist.prepend('prep1');
console.log(linkedlist.getHead());  //Node { value: 'prep1', next: Node { value: 'data1', next: Node { value: 'data2', next: [Node] } }}
console.log(linkedlist.getTail());  //Node { value: 'data4', next: null }
console.log(linkedlist.getAtIndex(1));  //Node { value: 'data1', next: Node { value: 'data2', next: Node { value: 'data3', next: [Node] } }}
linkedlist.removeLast();
console.log(linkedlist.containsValue('data1'))  //true
console.log(linkedlist.findIndex('data2'))  //2
console.log(linkedlist.insertAt('insert1', 0)); //Node { value: 'insert1', next: Node { value: 'prep1', next: Node { value: 'data1', next: [Node] } } }
console.log(linkedlist.getSize());  //5
console.log(linkedlist.removeAt(0));    //Node { value: 'prep1', next: Node { value: 'data1', next: Node { value: 'data2', next: [Node] } }}
console.log(linkedlist.toString()); //toString:  -> prep1 -> data1 -> data2 -> data3 -> null
console.log(linkedlist.getSize());  //4