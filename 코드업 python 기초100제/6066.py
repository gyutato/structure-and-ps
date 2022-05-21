nums = input().split()
for n in nums:
    n = int(n)
    if n % 2 == 0:
        print("even")
        continue
    print("odd")
