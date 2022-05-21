h, w = map(int, input().split())
board = [[0 for i in range(w)] for j in range(h)]

n = int(input())
for i in range(n):
    l, d, x, y = map(int, input().split())
    for j in range(l):
        if d == 1:
            board[x - 1 + j][y - 1] = 1
        elif d == 0:
            board[x - 1][y - 1 + j] = 1
            
for i in range(h):
    for j in range(w):
        print(board[i][j], end=' ')
    print('')
