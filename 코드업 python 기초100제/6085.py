w, h, b = map(int, input().split())

print("{0:0.2f} MB".format(w*h*b / 8 / 1024 / 1024))