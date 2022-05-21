board = [[0 for i in range(10)] for j in range(10)]

for i in range(10):
    board[i] = input().split()

goal = 0
y = 1
x = 1
while (y < 10 and x < 10):
    if board[y][x] == '1':
        y += 1
        x -= 1
    elif board[y][x] == '0':
        board[y][x] = '9'
        x += 1
    elif board[y][x] == '2':
        board[y][x] = '9'
        break

for i in range(10):
    for j in range(10):
        print(board[i][j], end=' ')
    print('')