export default function bs_list(haystack: number[], needle: number): boolean {
    // off-by-one strategy: low is inclusive, high is exclusive

    let low = 0;
    let high = haystack.length;

    do {
        const midpoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midpoint];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            // needle is in the lower half
            high = midpoint;
        } else {
            // needle is in the upper half
            low = midpoint + 1;
        }
    } while (low < high);

    return false;
}
