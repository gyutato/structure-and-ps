board = [[0 for i in range(19)] for j in range(19)]

for i in range(19):
    board[i] = input().split()

n = int(input())
for i in range(n):
    x, y = map(int, input().split())
    for i in range(19):
        if board[i][x-1] == '0':
            board[i][x-1] = '1'
        elif board[i][x-1] == '1':
            board[i][x-1] = '0'
    for i in range(19):
        if board[y-1][i] == '0':
            board[y-1][i] = '1'
        elif board[y-1][i] == '1':
            board[y-1][i] = '0'

for i in range(19):
    for j in range(19):
        print(board[i][j], end=' ')
    print('')