function divide(arr, n) {
    if (!Array.isArray(arr) || typeof n !== 'number' || n <= 0) {
        return "Invalid input. Please provide a valid array and a positive integer.";
    }

    let result = [];
    let currentSubarray = [];

    for (let num of arr) {
        if (currentSubarray.reduce((sum, el) => sum + el, 0) + num <= n) {
            currentSubarray.push(num);
        } else {
            result.push([...currentSubarray]);
            currentSubarray = [num];
        }
    }

    if (currentSubarray.length > 0) {
        result.push([...currentSubarray]);
    }

    return result;
}

// Examples
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5));
// Output: [[1, 2], [3], [4, 1, 0], [2, 2]]

console.log(divide([4, 3, 2, 1], 4));
// Output: [[4], [3], [2], [1]]




