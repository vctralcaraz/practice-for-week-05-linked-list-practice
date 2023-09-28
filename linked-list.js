class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val);  // create new node with given val

    newNode.next = this.head;  // set new nodes 'next' pointer to the list's current head pointer

    this.head = newNode;  //  set the list head to point to the new node
    this.length += 1;  // increase length by 1
  }

  addToTail(val) {
    // Your code here
    if(!this.head) {  // if head is NULL
      this.addToHead(val);  // invoke addToHead function with val
      return;
    }

    let current = this.head;  // set head to current
    const newNode = new LinkedListNode(val);  // create a new node

    while(current) {  // iterate through all nodes  // time complexity O(n)
      if(current.next === null) {  // if the current node's next pointer is null, we have reached the end of the list
        current.next = newNode;  // set the next pointer to the new node
        this.length += 1;  // increase length by 1

        break;  // break out of the loop
      }

      current = current.next;  // iterate to the next node
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;