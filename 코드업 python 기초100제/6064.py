# 세 정수 a, b, c 중 가장 작은 값을 출력, 삼항 연산자를 사용

a, b, c = map(int, input().split())
min = (a if a < b else b) if (a if a < b else b) < c else c
print(min)