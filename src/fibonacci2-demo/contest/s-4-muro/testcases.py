import random
import json
random.seed(0)
testcases = []
type = [False, True, False]
N = [5, 9, 15]
C = [5, 8, 11]
for t,(n,c) in zip(type,zip(N,C)):
    L = [min(random.randint(1,n), random.randint(1,n)) for i in range(c)]
    if t:
        for i in range(c):
            L[i] = min(L[i], n-i)
    temp = -1
    for x in L:
        temp = min(temp + 1, n-x)
    testcases.append({"L": L, "N": n, "C": c, "i": 0, "pos": 0, "muro": [0 for _ in range(n)], "sol": temp+1})
print(json.dumps(list(testcases)))
