import math


def bs_list(haystack: list[int], needle: int) -> bool:
    # off-by-one strategy: low is inclusive, high is exclusive

    low = 0
    high = len(haystack)

    while low < high:
        midpoint = (low + high) // 2
        # midpoint = math.floor(low + (high - low) / 2)
        value = haystack[midpoint]

        print(f"{low=} {high=} {midpoint=} {value=}")

        if value == needle:
            return True
        elif value > needle:
            # needle is in the lower half
            high = midpoint
        else:
            # needle is in the upper half
            low = midpoint + 1

    return False



res = bs_list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
print(res)