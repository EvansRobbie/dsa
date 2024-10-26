const towSum = (nums, target)=>{
  const results = []
  for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
      if(nums[i]+ nums[j]=== target){
        results.push(i,j)
      }
    }

  }
  return results
}

console.log(towSum([3, 2, 4, 8], 12))

// O(n^2)