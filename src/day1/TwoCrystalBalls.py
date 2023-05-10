import math


def two_crystal_balls(breaks: list[bool]) -> int:
    jmpAmount = int(math.floor(math.sqrt(len(breaks))))
    i = jmpAmount

    while i < len(breaks):
        print(f"Jumping to index: {i}")
        if breaks[i]:
            break
        i += jmpAmount

    # i is True, so we need to go back

    # previous known False
    last_known = i - jmpAmount

    # linear search
    for j in range(last_known, i):
        if breaks[j]:
            return j


    return -1  # nope


res = two_crystal_balls(breaks=[False, False, False, False, False, True])
print(res)