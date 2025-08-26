class Solution:
    def maxArea(self, height: list[int]) -> int:
        maxarea = 0
        for left in range(len(height)):
            for right in range(left + 1, len(height)):
                width = right - left
                maxarea = max(maxarea, min(height[left], height[right]) * width)

        return maxarea
    


a = Solution()
print(a.maxArea([1, 8, 6, 4, 7, 6, 3, 2]))