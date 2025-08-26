class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        n:int = len(nums)
        insertAtIndex:int = 1
        for i in range(1, n):
            if nums[i] != nums[i-1]:
                nums[insertAtIndex] = nums[i]
                insertAtIndex = insertAtIndex + 1

        return insertAtIndex



a = Solution()
y: list[int] = [1, 2, 2, 3, 4, 4, 5, 6]
x = a.removeDuplicates(y)

print(y[:x] + ["_"] * (len(y) - x))