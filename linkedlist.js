
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

