
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
    
    // list.append(value)               adds a new node containing value to the end of the list
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


    // For the sake of convenience, we maintain two references prev and cur. When we move along the list we shift these two references,
    // keeping prev one step before cur. We continue until cur reaches the node before which we need to make an insertion. If cur reaches null,
    // we don't insert, otherwise we insert a new node between prev and cur.

    // list.prepend(value)              adds a new node containing value to the start of the list
    prepend(value) {
        let node = new Node(value);
        let temp;

        if (this.head == null) {
            this.head = node;
        } else {
            temp = this.head
            this.head = node;
            this.head.next = temp;
        }
        this.size++;
    }

    getSize() {  // list.size       returns the total number of nodes in the list
        return this.size;
    }

    getHead() {  // list.head       returns the first node in the list
        return this.head;
    }

    getTail() {  // list.tail       returns the last node in the list
        let temp = this.head;
        let current = this.head; 

        while (current) {
            temp = current;
            current = current.next;
        }
        return temp;
    }

    getAtIndex(index) {  // list.at(index)      returns the node at the given index
        let temp = this.head;
        let current = this.head; 
        
        if (index > this.size || index < 0) return 'Error: "index" out of range.';

        for (let count=0; count <= index; count++) {
            temp = current;
            current = current.next;
        }
        return temp;
    }
    
    // list.pop                         removes the last element from the list
    removeLast() {
        let temp = this.head;
    
        if (this.head.next == null) return "Cannot remove Head Node";

        while(temp.next.next != null) {
            temp = temp.next;
        }

        temp.next = null;
        this.size--;
        return this.head;
    }

    // list.contains(value)             returns true if the passed in value is in the list and otherwise returns false.
    containsValue(value) {
        let temp = this.head;
        let containsBool = false;

        while(temp != null) {
            if (temp.value == value) {
                containsBool = true;
                break;
            }
            temp = temp.next;
        }
        return containsBool;
    }
    
    // list.find(value)                 returns the index of the node containing value, or null if not found.
    find(value) {
        let temp = this.head;
        let valueIndex = 'not found';
        let count = 0;

        while (temp != null) {
            if(temp.value == value) {
                valueIndex = count;
                break;
            };
            temp = temp.next;
            count++;
        }
        return "Node index: " + valueIndex;
    }
}


let list = new Linkedlist(); list;
list.append('data1'); list;
list.append('data2'); list;
list.append('data3'); list;
list.prepend('prep node1'); list;
console.log(list.getHead());
console.log(list.getSize());
console.log(list.getTail());
console.log(list.getAtIndex(0));
console.log(list.removeLast())
console.log(list.containsValue('data1'))
console.log(list.find('data2'))
// list.toString                    represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
// 
// Extra credit
// list.insertAt(value, index)      that inserts a new node with the provided value at the given index.
// list.removeAt(index)             that removes the node at the given index.
// Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.