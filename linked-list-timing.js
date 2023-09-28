const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
const iterations = 10000;  // ten thousand
let start, end;

const ll = new LinkedList();
const dll = new DoublyLinkedList();

// Linked List addToHead x iterations
start = new Date();
for(let i = 0; i < iterations; i++) {
  ll.addToHead(i);
}
end = new Date();
console.log(`Linked List - addToHead x ${iterations}: ${end - start}ms`);

// Linked List addToTails x iterations
start = new Date();
for(let i = 0; i < iterations; i++) {
  ll.addToTail(i);
}
end = new Date();
console.log(`Linked List - addToTail x ${iterations}: ${end - start}ms`);



// Doubly Linked List addToHead x iterations
start = new Date();
for(let i = 0; i < iterations; i++) {
  dll.addToHead(i);
}
end = new Date();
console.log(`Doubly Linked List - addToHead x ${iterations}: ${end - start}ms`);

// Doubly Linked List addToTail x iterations
start = new Date();
for(let i = 0; i < iterations; i++) {
  dll.addToTail(i);
}
end = new Date();
console.log(`Doubly Linked List - addToTail x ${iterations}: ${end - start}ms`);