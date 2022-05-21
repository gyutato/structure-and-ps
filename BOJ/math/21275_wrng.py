# 감을 못잡고 아예 헤멘 문제 ㅠㅠ
# 모든 변환가능한 진법을 비교하는 건 맞았다
# list = string은 아니다. 당연한건데...

def cnvrt (value):
    nums = []
    for notation in range(2, 37):
        decimal = 0
        flag = 0
        for num in value:
            if ord(num) > ord(str(notation)):
                flag += 1
        if flag == 1:
            continue
        else:
            for loc in range(len(value)):
                if 97 <= ord(value[loc]) <= 122:
                    decimal += ((ord(value[loc]) - 87) * (notation**(len(value)-(loc+1))))
                else:
                    decimal += (int(value[loc]) * (notation**(len(value)-(loc+1))))
                nums.append(decimal)
    print(nums)
    print(len(nums))

value = input()
cnvrt(value)
        

