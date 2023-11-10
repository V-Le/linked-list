import Node from "./linkedlistNode.js"

export default class Linkedlist {
    constructor(){          // values of the Linkedlist when first called
        this.head = null;   // head of the list
        this.size = 0;      // number of Nodes in the list
    }
    
    append(value) {    //adds a new node containing value to the end of the list
        if (this.head == null) this.head = new Node(value);
            else {                    // if temp head is not empty, then traverse through list
                let temp = this.head;    // Node { value: 'node data', next: null }
                while(temp.next) temp = temp.next;  // while temp.next is a node and not null
                temp.next = new Node(value);   // since temp is the last node, temp.next is null after the while loop, appends the null temp.next as the new node
            }
        this.size++;
    }

    prepend(value) {    //adds a new node containing value to the start of the list
        if (this.head == null) this.head = new Node(value);
            else {
                let temp = this.head
                this.head = new Node(value);
                this.head.next = temp;
            }
        this.size++;
    }

    getSize() {    //returns the total number of nodes in the list
        return this.size;
    }

    getHead() {    //returns the first node in the list
        return this.head;
    }

    getTail() {    //returns the last node in the list
        let temp = this.head;

        while (temp.next) temp = temp.next;
        return temp;
    }

    getAtIndex(index) {    //returns the node at the given index
        let temp = this.head;
        let current = this.head; 
        
        if (index > this.size || index < 0) return 'Error: "index" out of range.';

        for (let count=0; count <= index; count++) {
            temp = current;
            current = current.next;
        }
        return temp;
    }
    

    removeLast() {    //removes the last element from the list
        let temp = this.head;
    
        if (this.head.next == null) return "Cannot remove Head Node";

        while(temp.next.next != null) {
            temp = temp.next;
        }

        temp.next = null;
        this.size--;
        return this.head;
    }

    containsValue(value) {    //returns true if the passed in value is in the list and otherwise returns false.
        let temp = this.head;

        while(temp != null) {
            if (temp.value == value) return true;
            temp = temp.next;
        }
        return false;
    }
    
    findIndex(value) {    //returns the index of the node containing value, or null if not found.
        let temp = this.head;
        let index = 0;

        while (temp != null) {
            if(temp.value == value) return index;
            temp = temp.next;
            index++;
        }
        return null;
    }
    
    toString() {    ///represent your LinkedList objects as strings, format should be: ( value ) -> ( value ) -> ( value ) -> null
        let temp = this.head;
        let listString = '';

        while (temp != null) {
            listString = listString.concat(' -> ', temp.value);
            temp = temp.next;
            if (temp == null) listString = listString.concat(' -> ', temp);
        }
        return 'toString: ' + listString;
    }

    insertAt(value, index) {    //inserts a new node with the provided value at the given index.
        let node = new Node(value)
        let current = this.head;
        let previous = null;

        if (index > this.size || index < 0) return 'Index is not in range';

        if (index == 0) this.prepend(value);  
            else {
                for (let count=0; count <= index; count++) {
                    if (count == index) {
                        node.next = current;
                        previous.next = node;
                        this.size++;
                    } else {    
                        previous = current;
                        current = current.next;
                    }
                }
            }
        return this.head;
    }
        
    removeAt(index) {    //removes the node at the given index.
        let current = this.head;
        let previous = null;

        if (this.head == null) return 'List is empty';
        if (index >= this.size || index < 0) return 'Index is out of range';

        if (index == 0) {
            this.head = this.head.next;
        } else {
            for (let count=0; count <= index; count++) {
                if (count == index) {
                    previous.next = current.next;
                } else { 
                    previous = current;
                    current = current.next;
                }
            }
        }
        this.size--;
        return this.head;
    }
}