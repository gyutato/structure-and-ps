import math

# N이 주어졌을 때
n = int(input())
answer = 0

def primes(n):
    if n > 1:
        flag = 0
        for div in range(2, int(math.sqrt(n)+1)):
            if n % div == 0:
                flag += 1
                break
        if flag == 0:
            return True
        else:
            return False
    else:
        return False

# N보다 크거나 같고
def check(n):
    while True:
        if primes(n): # 소수이면서
            f = [i for i in str(n)]
            flag = 0
            for i in range(0, len(f)//2 + 1):
                if f[i] != f[-(i+1)]: # 팰린드롬인 수
                    flag += 1
                    break
            if flag == 0:
                return n
            else:
                n += 1
        else:
            n += 1


# 그 중 가장 작은 수
print(check(n))