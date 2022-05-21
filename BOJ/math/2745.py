n, b = input().split()
b = int(b)
decimal = 0

for i in range(len(n)): # 0 ~ len(n)-1
    if 48 <= ord(n[i]) <= 57:
        decimal += int(n[i]) * (b ** ((len(n)-1) - i))
    else:
        decimal += (ord(n[i]) - 55) * (b**((len(n)-1) - i))

print(decimal)