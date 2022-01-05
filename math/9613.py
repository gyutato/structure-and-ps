def gcd(a, b):
    if a > b:
        while(b > 0):
            a, b = b, a % b
            if b == 0:
                return a
    else:
        while (a > 0):
            b, a = a, b % a
            if a == 0:
                return b

t = int(input())

for i in range(t):
    sum = 0
    nums = list(input().split())
    for j in range(1, len(nums)-1):
        for q in range(j+1, len(nums)):
            sum += (gcd(int(nums[j]), int(nums[q])))
    print(sum)
            


