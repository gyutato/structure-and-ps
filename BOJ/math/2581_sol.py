m = int(input())
n = int(input())

unum = []

for num in range(m, n+1):
    error = 0
    if num > 1: # 1은.. 소수가.. 아니엇읍니다
        for div in range(2, num):
            if num % div == 0:
                error += 1
                break
# 여기서는 하나라도 나눠지는 dividend가 등장하면 break
        if error == 0:
            unum.append(num)

if len(unum) <= 0:
    print(-1)

else:
    print(sum(unum))
    print(min(unum))