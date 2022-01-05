# 최소공배수 구하기: 유클리드 호제법 사용

n = int(input())

def gcd(a, b):
    while (b > 0):
        a, b = b, a % b
        if b == 0 :
            return a

for i in range(n):
    a, b = map(int, input().split())
    print(gcd(a, b) * (a // gcd(a, b)) * (b // gcd(a, b)))

