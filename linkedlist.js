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
        if (this.head == null) this.head = new Node(value);
        else {                    // if temp head is not empty, then traverse through list
            let temp = this.head;    // Node { value: 'node data', next: null }
            while(temp.next) temp = temp.next;  // while temp.next is a node and not null
            temp.next = new Node(value);   // since temp is the last node, temp.next is null after the while loop, appends the null temp.next as the new node
        }
        this.size++;
    }

    // list.prepend(value)              adds a new node containing value to the start of the list
    prepend(value) {
        if (this.head == null) this.head = new Node(value);
        else {
            let temp = this.head
            this.head = new Node(value);
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

        while (temp.next) temp = temp.next;
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
    findIndex(value) {
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
    
    // list.toString                    represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        let temp = this.head;
        let listString = '';

        while (temp != null) {
            listString = listString.concat(' -> ', temp.value);
            temp = temp.next;
            if (temp == null) {
                listString = listString.concat(' -> ', temp);
            }
        }
        return 'toString: ' + listString;
    }

    // list.insertAt(value, index)      that inserts a new node with the provided value at the given index.
    insertAt(value, index) {
        
        let node = new Node(value)
        let current = this.head;
        let previous = this.head;

        if (index > this.size || index < 0) return 'Index is not in range';

        if (index == 0) {
            node.next = this.head
            this.head = node;  
        }   else {
                for (let count=0; count <= index; count++) {
                    if (count == index) {
                        node.next = current;
                        previous.next = node;
                    } else {    
                        previous = current;
                        current = current.next;
                    }
                }
            }
            this.size++;
            return this.head;
        }
        
        //            0        PREVIOUS    CURRENT      NEXT
        //      [PREP1 NODE] -> [DATA1] -> [DATA 2]-> [DATA 3] -> NULL
        //                       head       insert      tail
    // list.removeAt(index)             that removes the node at the given index.
    removeAt(index) {
        let current = this.head;
        let previous = this.head;

        if (index >= this.size || index < 0) return 'Index is out of range';

        if (index == 0) {
            this.head = this.head.next;
        } else {
            for (let count=0; count <= index; count++) {
                if (count == index) {
                    previous.next = current.next;
                }
                previous = current;
                current = current.next;
            }
        }
        this.size--;
        return this.head;
    }
}

let list = new Linkedlist(); list;
list.append('data1'); list;
list.append('data2'); list;
list.append('data3'); list;
list.append('data4'); list;
list.prepend('prep1'); list;
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getAtIndex(0));
list.removeLast(); list;
console.log(list.containsValue('data1'))
console.log(list.findIndex('data2'))
console.log(list.insertAt('insert1', 1));
console.log(list.getSize());
console.log(list.removeAt(0)); 
console.log(list.toString());
list;
console.log(list.getSize());