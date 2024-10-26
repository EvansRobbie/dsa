const recursiveBinarySearch = (arr, target) => {
  let lowIndex = 0;
  let highIndex = arr.length - 1;

  return search(arr, target, lowIndex, highIndex);
};

const search = (arr, target, lowIndex, highIndex) => {
  if (lowIndex > highIndex) {
    return -1;
  }
  let middleIndex = Math.floor((highIndex + lowIndex) / 2);

  if (arr[middleIndex] === target) {
    return middleIndex;
  } else if (target > arr[middleIndex]) {
    return search(arr, target, middleIndex + 1, highIndex);
  } else {
    return search(arr, target, lowIndex, middleIndex - 1);
  }
};

console.log(recursiveBinarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90], 80));
