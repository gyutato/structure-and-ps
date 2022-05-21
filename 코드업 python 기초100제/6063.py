# 입력된 두 정수 중 큰 값을 출력, 삼항 연산자를 사용

a, b = map(int, input().split())
max = a if a >= b else b
print(max)