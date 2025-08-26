class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        largestDiff:int = 0
        minSoFar:int = float("inf")
        for min in prices:
            if min < minSoFar:
                minSoFar = min
            else:
                largestDiff = max(largestDiff, min - minSoFar)
        
        return largestDiff


a = Solution()
print(a.maxProfit([7, 5, 2, 4, 3, 6, 2, 8]))