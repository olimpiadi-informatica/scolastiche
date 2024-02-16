import random
import json
random.seed(0)
testcases = []
type = [False, True, False]
N = [3, 8, 12]
for t,n in zip(type,N):
    A = [random.randint(1,10) for _ in range(n)]
    L = [random.randint(1,10) for _ in range(n)]
    R = [False for _ in range(n)]
    if t:
        for i in range(n):
            if A[i] > L[i]:
                A[i], L[i] = L[i], A[i]
    testcases.append({"N": n, "altezze": A, "larghezze": L, "rot": R, "pos": 0})
print(json.dumps(list(testcases)))
