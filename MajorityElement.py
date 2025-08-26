import collections

class Solution:
    def majorityElement(self, nums):
        counts = collections.Counter(nums)
        return max(counts.keys(), key=counts.get)


a = Solution()
print(a.majorityElement([2, 3, 2, 5, 4, 5, 4, 6, 4]))