n = int(input())
clap = {3, 6, 9}
tmp = n

for i in range(1, n + 1):
    cnt = 0
    tmp = i
    while (tmp > 0):
        if tmp % 10 in clap:
            cnt += 1
        tmp //= 10
    if (cnt > 0):
        print('X' * cnt, end=' ')
    else:
        print(i, end=' ')