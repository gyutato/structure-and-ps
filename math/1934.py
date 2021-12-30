# b에 대한 조건! ZeroDivisionError 주의

def gcd (a, b):
    while True:
        a, b = b, a % b
        if b == 0:
            return a

def lcm (a, b):
    return a * b // gcd(a, b)

t = int(input())
lcms = []

for i in range(t):
    a, b = map(int, input().split())
    lcms.append(lcm(a, b))

for i in range(t):
    print(lcms[i])