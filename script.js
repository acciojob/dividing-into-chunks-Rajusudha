const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  if (!arr || n <= 0) {
    return "Invalid input";
  }

  const result = [];
  let currentSubarray = [];

  let currentSum = 0;
  for (const num of arr) {
    if (currentSum + num <= n) {
      currentSubarray.push(num);
      currentSum += num;
    } else {
      result.push([...currentSubarray]);
      currentSubarray = [num];
      currentSum = num;
    }
  }

  // Adding the last subarray
  result.push([...currentSubarray]);

  return result;
};

const userN = prompt("Enter n: ");
const parsedN = parseInt(userN);

if (!isNaN(parsedN)) {
  alert(JSON.stringify(divide(arr, parsedN)));
} else {
  alert("Please enter a valid number for n.");
}

