def bubble_sort(arr: list[int]) -> list[int]:
    length = len(arr)
    for iteration in range(length):
        for pos in range(length-iteration-1):
            if arr[pos] > arr[pos+1]:
                # swap places
                temp = arr[pos]
                arr[pos] = arr[pos+1]
                arr[pos+1] = temp
    return arr

res = bubble_sort(arr=[2,6,8,1,3,8,3,5,8,2,67,2,3,9,10,51,24,21])
print(res)