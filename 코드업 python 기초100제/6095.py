n = int(input())
board = [[0 for _ in range(19)] for _ in range(19)]

for i in range(n):
    y, x = map(int, input().split())
    board[y-1][x-1] = 1

for col in board:
    for val in col:
        print(val, end=' ')
    print('')