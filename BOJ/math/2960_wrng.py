# ValueError 발생. 이유를 모르겠음
# 그전에 자리(인덱스)로 접근해야 하는데 값(수) 관점에서 접근한 것도 최선은 아닌 것 같음

n, k = map(int, input().split())
nums = []

# N까지의 모든 수를 나열한다.
for i in range (2, n+1):
    nums.append(i)

# 가장 작은 값 P를 찾는다.
count = 0
remv = 0

while (count < k):
    p = min(nums)
    # P를 지우고,
    remv = p
    nums.remove(p)
    count += 1
    # 배수들도 지운다.
    m = 2
    while (p*m <= max(nums) and count < k):
        if p*m in nums:
            remv = p*m
            nums.remove(p*m)
            count += 1
            m += 1
        else:
            m += 1

print(remv)
    



