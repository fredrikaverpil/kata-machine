type Node<T> = {
    value: T;
    next: Node<T> | undefined;
};

export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            // empty queue
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) {
            // no head
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined; // this is the disconnect/garbage collection
        if (this.length === 0) {
            this.tail = undefined;
        }
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
