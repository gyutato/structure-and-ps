# 유클리드 호제법 사용... 이해가 잘 안가...

a, b = map(int, input().split())

def gcd(a, b):
    while b > 0:
        a, b = b, a % b # b랑, a와 b를 mod연산한 값을 다시 mod연산 ... 반복
        print(a, b)
    # while문이 끝남 = b가 0이 됨 = 앞선 식의 mod연산 결과가 0이었음
    # 그 앞선 식의 나누는 수(b)가 while문에 종료되고 나면 a자리에 들어가 있을 것이므로
    return a # a를 리턴!

def lcm(a, b):
    return a * b // gcd(a, b) # gcd * (a//gcd) * (b//gcd) = a * b // gcd

print(gcd(a, b))
print(lcm(a, b))


