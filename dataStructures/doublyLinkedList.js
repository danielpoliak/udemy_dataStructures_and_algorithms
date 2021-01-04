class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null
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
        } else {
            this.head.prev = newHead
            newHead.next = this.head
            this.head = newHead
        }

        this.length++
        return this
    }
    get(index) {
        let currentItem = null

        if(index < 0 || index >= this.length) return currentItem
        if(index === 0 ) return this.head

        if(index <= this.length / 2) {
            currentItem = this.head

            for(let i = 1; i <= index; i++) {
                currentItem = currentItem.next
            }
        } else {
            currentItem = this.tail

            for(let i = this.length - 2; i >= index; i--) {
                currentItem = currentItem.prev
            }
        }

        return currentItem
    }
    set(index, val) {
        let currentIndexNode = this.get(index)
        if(currentIndexNode) {
            currentIndexNode.val = val
            return true
        }

        return false
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false
        if(index === 0)  return !!this.unshift(val)
        if(index ===  this.length) return !!this.push(val)

        const newNode = new Node(val)
        const prevNode = this.get(index - 1)
        const nextNode = prevNode.next

        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = nextNode
        nextNode.prev = newNode

        this.length++
        return true
    }
    remove(index) {
        if(index < 0 || index > this.length) return false
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        const itemToBeRemoved = this.get(index)

        const prevItem = itemToBeRemoved.prev
        const nextItem = itemToBeRemoved.next

        prevItem.next = nextItem
        nextItem.prev = prevItem

        itemToBeRemoved.next = null
        itemToBeRemoved.prev = null

        this.length--
        return itemToBeRemoved
    }
    reverse() {
        let currentNode = this.head
        this.head = this.tail

        //
        for(let i = 0; i < this.length; i++) {
            currentNode = currentNode.next
            currentNode.prev = currentNodeTemp.next
            currentNode.next = currentNodeTemp.prev
        }
    }
}
    c 
1 => 2 => 3 =>
  <=   <=   <=
const list = new DoublyLinkedList()