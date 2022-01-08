n = int(input())

change = [5, 2]
count = 0

for i in range(len(change)):
    remain = n % change[i] # 일단 큰 수로 나눈다
    if remain % 2 == 0: 
        # 큰 수로 나눈 나머지가 작은 수로 나누어 떨어지면,
        # 큰 수로 나눠지는 몫 만큼 총 동전의 개수에 더한다
        count += n // change[i]
        n //= change[i]
    elif remain % 2 != 0:
        # 큰 수로 나눈 나머지를 작은 수로 거슬러줄 수 없으면,
        # 총 동전의 개수에서 1만큼을 빼고, 다시 거슬러줄 돈에 큰 수만큼 더한다
        count -= 1
        n += change[i]
        n


print(count)
        
