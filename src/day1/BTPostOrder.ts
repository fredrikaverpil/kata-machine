function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // base case
    if (!curr) {
        return path;
    }

    // Recurse on the left subtree
    walk(curr.left, path);

    // Recurse on the right subtree
    walk(curr.right, path);

    // visit the current node
    path.push(curr.value);

    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    // we are given the root (or head) of the tree
    // we will return the visited nodes in that order

    return walk(head, []);
}
