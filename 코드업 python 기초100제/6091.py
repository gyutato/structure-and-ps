a, b, c = map(int, input().split())

day = 1
while (day % a or day % b or day % c):
    day += 1

print(day)