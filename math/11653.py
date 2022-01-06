n = int(input())
nums = []
div = 2
while (div <= n):
    if n % div == 0:
        nums.append(div)
        n = n // div
        if n == 1:
            break
    else:
        div += 1

for i in range(len(nums)):
    print(nums[i])
