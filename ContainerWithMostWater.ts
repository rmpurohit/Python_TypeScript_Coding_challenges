function maxArea(height: number[]): number {
    let maxarea = 0;

    for (let left = 0; left < height.length; left++) {
        for (let right = left + 1; right < height.length; right++) {
            let width = right - left;
            maxarea = Math.max(
                maxarea,
                Math.min(height[left], height[right]) * width,
            );
        }
    }

    return maxarea;
}

console.log(maxArea([1, 8, 6, 4, 7, 6, 3, 2]))