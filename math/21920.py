# gcd, 소인수분해 사용하는 문제들 반복 중...

n = int(input())
sequence = list(input().split())
x = int(input())

unums = []

def gcd(num, x):
    if num > x:
        while(x > 0):
            num, x = x, num % x
            if x == 0:
                return num
    elif num <= x:
        while(num > 0):
            x, num = num, x % num
            if num == 0:
                return x

for num in sequence:
    num = int(num)
    if gcd(num, x) == 1:
        unums.append(num)

print(sum(unums)/len(unums))
