#timeout이 문제가 아니라 완전 틀렸다

m = int(input())
n = int(input())

unum = []

for i in range(m, n+1):
    if i > 1:
        d = 2
        while (i % d != 0): 
            # i = 2, d = 2일 때 while문이 아예 돌지 않음.
            # i = 3일 때는 첫 번째 while 돌고 나서 i = 3, d = 3이 되므로 if문 안으로 들어가지 못함
            d += 1
            if d == i-1:
                unum.append(i)
                break

if len(unum) == 0:
    print(-1)

else:
    print(sum(unum))
    print(min(unum))

        
