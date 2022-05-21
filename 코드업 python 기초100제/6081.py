n = input()

for i in range(1, 16): 
    print("{0}*{1:X}={2:X}".format(n, i, int(n, 16) * i))
