const binarySearch = (arr, target) => {
  let lowIndex = 0;
  let highIndex = arr.length - 1;
  while (lowIndex <= highIndex) {
    let middleIndex = Math.floor((highIndex + lowIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    } else if (target > arr[middleIndex]) {
      lowIndex = middleIndex + 1;
    } else {
      highIndex = middleIndex - 1;
    }
  }
  return -1;
};

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90], 100));
