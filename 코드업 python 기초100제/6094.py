n = int(input())
nums = input().split()
min = int(nums[0])
for num in nums:
    if min > int(num):
        min = int(num)
print(min)