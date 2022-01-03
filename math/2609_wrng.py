# 틀린 건 아니고 유클리드 호제법 안씀

a, b = map(int, input().split())

def gcd(a, b):
    n = 2
    common = 1
    while (n <= min(a, b)):
        if a % n == 0 and b % n == 0:
            a = a // n
            b = b // n
            common *= n
        else:
            n += 1
    return common

def lcm(a, b):
    common = gcd(a, b)
    if common == 1:
        return a * b
    else: 
        return (a * b) // common

print(gcd(a, b))
print(lcm(a, b))