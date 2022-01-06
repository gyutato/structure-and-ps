# 소수가 중복되는 경우도 있다 !!! 꼼꼼하게 생각할 것

import math

n = int(input())
a = list(map(int, input().split()))

unums = []
for i in range(n):
    flag = 0
    if a[i] > 0:
        for div in range(2, int(math.sqrt(a[i])+1)):
            if a[i] % div == 0:
                flag += 1
                break
            elif a[i] % div != 0:
                continue
        if flag == 0:
            unums.append(a[i])


if len(unums) == 0:
    lcm = -1
    print(lcm)

else:
    lcm = 1
    multipliers = []
    for num in unums:
        if num not in multipliers:
            lcm *= num
            multipliers.append(num)

    print(lcm)