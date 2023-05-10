export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // base case 1: we are both null (equal)
    // structural check
    if (a == null && b == null) {
        return true;
    }

    // base case 2: just one is null (not equal)
    // structural check
    if (a == null || b == null) {
        return false;
    }

    // base case 3: values are not equal
    // value check
    if (a.value !== b.value) {
        return false;
    }

    // recurse on the left and right subtrees
    return compare(a.left, b.left) && compare(a.right, b.right);
}
