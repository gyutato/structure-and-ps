n = int(input())
nums = input().split()

calls = [0 for _ in range(23)]

for num in nums:
    num = int(num)
    calls[num - 1] += 1

for c in calls:
    print(c, end=' ')
