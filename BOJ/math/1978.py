n = int(input())
nums = list(input().split())
count = 0
value = 0

for i in range(n):

    value = int(nums[i])
    div = 2
    error = 0

    if value > 1:
        while (div < value):
            if value % div == 0:
                error += 1
                break
            else:
                div += 1

        if error == 0:
            count += 1

print(count)
