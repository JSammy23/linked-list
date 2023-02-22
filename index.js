class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
    
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // method functions
    add(element){
        // Create new node
        const node = new Node(element);

        // Store current node
        const current;

        // If the list is empty add element and make it the head
        if (this.head == null){
            this.head = node;
        } else {
            current = this.head;
            // Iterate to the end of the list
            while (current.next) {
                current = current.next
            }
            // Add node
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size){
            return console.log('Please enter valid index.')
        } else {
            // Create a new node
            const node = new Node(element);
            const curr, prev;
            curr = this.head;

            // Add the element to the first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                const it = 0;

                //Iterate over list to find position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // Adding element
                node.next = curr;
                prev.next = node;
            }
            this.size++
        }
    }

    removeAt(element, index){
        if (index < 0 || index > this.size){
            return console.log('Please enter a valid index.')
        } 
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            //Deleting first element
            if (index === 0) {
                this.head = curr.next;
            }
            else {
                // Iterate over list to remove element
                while (it < index){
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                //Remove element 
                prev.next = curr.next;
            }
            this.size--;

            // return the removed element
            return curr.element;
        }

    }


}