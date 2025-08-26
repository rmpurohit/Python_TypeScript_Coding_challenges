function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let n:number = nums.length
    let insertAtIndex:number = 1
    for (let i = 1; i < n; i++){
        const curr = nums[i]
        const prev = nums[i - 1]
        if (curr !== prev){
            nums[insertAtIndex] = curr
            insertAtIndex += 1
        }
    }
    return insertAtIndex
};

const y = [4, 3, 1, 2, 5, 4, 6, 2, 3, 4, 6];
const x = removeDuplicates(y.sort());
console.log(x)

const result = y.slice(0, x).concat(Array(y.length - x).fill("_"));
console.log(result);