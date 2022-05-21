a, d, n = map(int, input().split())

cnt = 1
while (cnt < n):
    a += d
    cnt += 1

print(a)