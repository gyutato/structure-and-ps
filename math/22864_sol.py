# 뭉뚱그려 생각하지 말고 주어진 단위/단계별로 쪼개서 점차 어떻게 되어야 하는지 생각해볼 것.

a, b, c, m = map(int, input().split())
tired = 0
work = 0

for h in range(1, 25):
    if tired + a <= m:
        tired  += a
        work += b
    
    else:
         tired -= c
         if tired <= 0:
             tired = 0

print(work)

