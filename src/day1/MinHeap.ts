export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        // no elements
        if (this.length === 0) {
            return -1;
        }

        // take the head, get the value
        // take the last element in the array and put it in the head's position
        // heapify down
        const out = this.data[0];
        this.length--; // remove the last element

        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }

    private heapifyUp(idx: number): void {
        // We only have one value to look at; the parent.

        if (idx === 0) {
            return;
        }

        const parent = this.parent(idx);
        const parentValue = this.data[parent];
        const value = this.data[idx];

        if (parentValue > value) {
            // swap
            this.data[idx] = parentValue;
            this.data[parent] = value;

            this.heapifyUp(parent);
        }
    }

    private heapifyDown(idx: number): void {
        // When we do a deletion, we need to remove the head element.
        // Then take the last element of the array, put it in the first position.
        // Then we need to heapify down.

        if (idx >= this.length) {
            return;
        }

        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        // Do we have any more children?
        if (leftIdx >= this.length) {
            return;
        }

        // Do we need to swap?
        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];
        const value = this.data[idx];
        if (leftValue > rightValue && value > rightValue) {
            // swap
            this.data[idx] = rightValue;
            this.data[rightIdx] = value;

            this.heapifyDown(rightIdx);
        } else if (rightValue > leftValue && value > leftValue) {
            // swap
            this.data[idx] = leftValue;
            this.data[leftIdx] = value;

            this.heapifyDown(leftIdx);
        }
    }
}
