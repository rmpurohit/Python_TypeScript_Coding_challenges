def removeElement(nums: list[int], val: int) -> int:
    writer = 0  
    for reader in range(len(nums)):
        if nums[reader] != val:
            nums[writer] = nums[reader]
            writer += 1
    return writer

nums = [4, 3, 2, 4, 2, 3, 4]
val = 4
k = removeElement(nums, val)

print(k, nums[:k] + ["_"] * (len(nums) - k))
