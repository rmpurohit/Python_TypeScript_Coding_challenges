function removeElement(nums: number[], val: number): number {
    let writer = 0;
    for (let reader = 0; reader < nums.length; reader++) {
      const v = nums[reader]!;          
      if (v !== val) {
        nums[writer] = v;               
        writer++;
      }
    }
    return writer;
  }
  
  const nums = [4, 3, 2, 4, 2, 3, 4];
  const val = 4;
  const k = removeElement(nums, val);
  
  console.log( k, nums.slice(0, k).concat(Array(nums.length - k).fill("_")));
  