a, b, c, m = map(int, input().split())
tired = 0
best = 0

def work(h):
    # h시간만큼 일했다면 쉬는시간은 24-h
    tired = (h * a) - ((24 - h) * c)

    # 피로도가 음수면 피로도는 0이 됨
    if tired <= 0:
        tired = 0
    
    # 피로도가 m을 넘길 경우 일은 0
    if tired > m:
        return 0
    else:
        return  h * b

for h in range(2, 25):
    # 최대로 일할 수 있는 시간 찾기
    if (work(h-1) <= work(h)):
        best = work(h)
        print(best)
    else:
        break

print(best)


    
    


# print(work)
