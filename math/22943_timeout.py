# 테스트 케이스는 통과하는데 시간 초과
# 소수 구하는 함수를 에라토스테네스의 체로 만들었으나 여전히 시간 초과.. 대체 뭐냐고!!!!

import math

k, m = map(int, input().split())
adds = []
answers = []

def primes(number):
    num = [True] * (number+1)
    temp = []
    if number > 1:
        for i in range(2, len(num)):
            if num[i] == True:
                num[i] = False
                temp.append(i)
                for j in range(i*2, len(num), i):
                    num[j] = False

    return temp


# k가지의 숫자를 한 번씩만 사용하여 만들 수 있는 수
for number in range(10**(k-1), 10**k):
    temp = [i for i in str(number)]
    check = []

    for i in range(len(temp)):
        if temp[i] not in check:
            check.append(temp[i])
    
    if len(temp) != len(check):
        continue

    # 서로 다른 두 개의 소수의 합으로 나타낼 수 있는 경우
    primeNos = primes(number)
    for i in range(len(primeNos)):
        minus = number - primeNos[i]
        if minus in primeNos and minus != primeNos[i]:
            adds.append(number)
            break  

# M으로 나누어 떨이지지 않을 때까지 나눈 수가 두 개의 소수의 곱인 경우
for i in range(len(adds)):
    while (adds[i] % m == 0):
        adds[i] = adds[i] // m
    
    for j in range(len(primeNos)):
        div = adds[i] // primeNos[j]
        remain = adds[i] % primeNos[j]
        if remain == 0 and div in primeNos:
            answers.append(adds[i])
            break

print(len(answers))
