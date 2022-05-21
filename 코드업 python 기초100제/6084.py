h, b, c, s = map(int, input().split())

bit = h * b * c * s
byte = bit / 8
kbyte = byte/ 1024
mbyte = kbyte / 1024
print("{0:0.1f} MB".format(mbyte))