# 딕셔너리를 사용해서 미리 문자 >> 숫자로 변환 (36개밖에 안되므로)
# 웬만하면 함수로 정의해서 연산
# 단계별로 꼼꼼하게 고려할 것

Anum, Bnum = map(str, input().split())

numbers = dict()

# 0부터 9까지
for i in range(0, 10):
    numbers[str(i)] = i
# a부터 z까지
for i in range(10, 36):
    numbers[chr(87+i)] = i

# 진법 변환
def toDecimal(string, notation):
    temp = 0
    for i in range(len(string)):
        temp += (notation ** i) * (numbers[string[-1-i]])
    return temp

# Anum, Bnum 비교
a_max = max(list(Anum))
b_max = max(list(Bnum))

count = 0
unums = [0, 0]
for a in range(numbers[a_max]+1, 37):
    for b in range(numbers[b_max]+1, 37):
        if toDecimal(Anum, a) == toDecimal(Bnum, b):
            if a == b:
                continue
            else:
                if toDecimal(Anum, a) >= 2**63:
                    continue
                # 답인 경우 각 진수를 리스트로 저장
                # 단, 이후 반복을 통해 a, b는 36까지 무조건 증가
                unums[0] = a
                unums[1] = b
                count += 1

if count == 0:
    print("Impossible")
elif count > 1:
    print("Multiple")
elif count == 1:
    print(toDecimal(Anum, unums[0]), unums[0], unums[1], sep=' ')