class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.pred = null
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;

        const poppedNode = this.tail
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null

            this.length--;
        }
        return poppedNode;
    }
    shift(){
        if(!this.head) return undefined;
        const poppedNode = this.head

        if(this.length === 1) {
            this.tail = null
            this.head = null
        } else {
            this.head = poppedNode.next
            this.head.prev = null
            poppedNode.next =  null
        }

        this.length--
        return poppedNode;
    }
    unshift(val){
        const newHead = new Node(val)

        if(!this.length) {
            this.head = newHead
            this.tail = newHead
            return newHead
        } else {
            this.head.prev = newHead
            newHead.next = this.head
            this.head = newHead
        }

        this.length++
        return newHead
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0 ) return this.head

        let currentItem = null

        if(index < this.length / 2) {
            currentItem = this.head

            for(let i = 1; i === index; i++) {
                currentItem = currentItem.next
            }
        } else {
            currentItem = this.tail

            for(let i = this.length - 2; i === index; i--) {
                currentItem = currentItem.prev
            }
        }

        return currentItem
    }
}

const list = new DoublyLinkedList()