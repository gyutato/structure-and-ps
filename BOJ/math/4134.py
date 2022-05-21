# 소수 판정법 공부할 것
# 소수 판정은 제곱근까지! 시간 복잡도 고려
# 0과 1은 소수가 아님!!!

import math

cnt = int(input())

for i in range(cnt):
    n = int(input())

    while True:
        if n == 0 or n == 1:
            n = 2
        if n > 1:
            error = 0
            for div in range(2, int(math.sqrt(n)+1)):
                if n % div != 0:
                    continue
                elif n % div == 0:
                    error += 1
                    break
            if error == 1:
                n += 1
            elif error == 0:
                print(n)
                break
        