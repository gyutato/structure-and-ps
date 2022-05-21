n = int(input())
k = 1
sum = 0

for i in range(n+1):
    sum += i
    if sum >= n:
        print(i)
        break

"""
while (sum < n):
    sum += k
    k += 1
print(k - 1)

# break가 필요 없으니까 while문이 더 나은 것 같은데, 언제나 정확한 조건을 생각하는 것을 유념할 것 !!!
"""
