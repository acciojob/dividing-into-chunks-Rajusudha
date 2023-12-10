def divide(arr, n):
    if not arr or n <= 0:
        return "Invalid input"

    result = []
    current_subarray = []

    current_sum = 0
    for num in arr:
        if current_sum + num <= n:
            current_subarray.append(num)
            current_sum += num
        else:
            result.append(current_subarray)
            current_subarray = [num]
            current_sum = num

    # Adding the last subarray
    result.append(current_subarray)

    return result

# Examples
print(divide([1, 2, 3, 4, 1, 0, 2, 2], 5))  # Output: [[1, 2], [3], [4, 1, 0], [2, 2]]
print(divide([4, 3, 2, 1], 4))              # Output: [[4], [3], [2], [1]]


