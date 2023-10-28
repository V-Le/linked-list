
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(value) {
        let node = new Node(value);
        let current;


        //if current head is null, then set new node as head
        if (this.head == null) {
            this.head = node;
        } else {
            //if current head is not empty, then traverse through list  
            current = this.head;

        }
    }
}

let list = new Linkedlist();
list
list.append('node data')
list;

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