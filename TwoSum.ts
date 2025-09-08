function twoSum(numbers: number[], target: number): number[] {
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        let sum = numbers[low] + numbers[high];

        if (sum == target) {
            return [low + 1, high + 1];
        } else if (sum < target) {
            low++;
        } else {
            high--;
        }
    }
    // In case there is no solution, return [-1, -1].
    return [-1, -1];
}

console.log(twoSum([2,4,1,6], 8))