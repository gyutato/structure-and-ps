n, k = map(int, input().split())
count = 0

# N개의 수를 적는다
nums = [True] * (n+1) # 인덱스가 곧 수가 된다 (0~N)

# 소수 P를 찾아서 지운다
for i in range(2, n+1):
    for j in range(i, n+1, i):
        # True인 경우, 즉 지워지지 않았을 경우에만 지운다. 
        # 예를 들어 6의 경우, 2의 배수를 지우는 과정에서 이미 지워졌다면 3의 배수를 지우는 과정에서 또 지울 수 없다.
        if nums[j] == True:
            nums[j] = False
            count += 1
            if count == k:
                print(j)
                break




