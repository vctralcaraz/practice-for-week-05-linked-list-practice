class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);  // create a new node

    if(!this.head) {  // if the head is null

      this.head = newNode;  // add new node to head
      this.tail = this.head;  // add new head to tail
      this.length += 1;  // increase length by 1

      return;
    }

    this.head.prev = newNode;  // set the head's prev pointer to new node
    newNode.next = this.head;  // set new nodes next pointer to the head

    this.head = newNode;  // set new node as the head
    this.length += 1;  // increase length by 1
  }

  addToTail(val) {
    // Your code here

    if(!this.head) {  // if there is no head
      this.addToHead(val);  // invoke addToHead with val

      return;
    }

    let newNode = new DoublyLinkedListNode(val);  // create a new node

    this.tail.next = newNode;  // set the current tail's next pointer to the new node
    newNode.prev = this.tail;  // set the new node's prev pointer to the current tail
    this.tail = newNode;  // set the new node as the current tail

    this.length += 1;  // increase length by 1
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;