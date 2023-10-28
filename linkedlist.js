
class Node {
    constructor(value) {
        this.value = value; // the value of this Node
        this.next = null;   // pointer to the next node
    }
}

class Linkedlist {
    constructor(){          // values of the Linkedlist when first called
        this.head = null;   // head of the list
        this.size = 0;      // number of Nodes in the list
    }

    append(value) {
        let node = new Node(value);
        let current;

        if (this.head == null) {    // if head is empty/null, then set new Node as head
            this.head = node;
        } else {                    // if current head is not empty, then traverse through list
            current = this.head;    // Node { value: 'node data', next: null }
            while(current.next) {   // while current.next is a node and not null
                current = current.next; // sets the current.next node as the current node
            }
            current.next = node;    // since current is the last node, current.next is null after the while loop, appends the null current.next as the new node
        }
        this.size++;
    }

    prepend(value) {
        let node = new Node(value);
        let current;

        // if head is empty/null, then set new Node as head
        // else traverse through list to find null, and set previous node to next node
        // or temporarily hold both 

    }
}

let list = new Linkedlist();
list
list.append('node data')
list;
list.append('second node data')
list;
list.preprend('prepended node');


// list.append(value)               adds a new node containing value to the end of the list
// list.prepend(value)              adds a new node containing value to the start of the list
// list.size                        returns the total number of nodes in the list
// list.head                        returns the first node in the list
// list.tail                        returns the last node in the list
// list.at(index)                   returns the node at the given index
// list.pop                         removes the last element from the list
// list.contains(value)             returns true if the passed in value is in the list and otherwise returns false.
// list.find(value)                 returns the index of the node containing value, or null if not found.
// list.toString                    represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
// 
// Extra credit
// list.insertAt(value, index)      that inserts a new node with the provided value at the given index.
// list.removeAt(index)             that removes the node at the given index.
// Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.