import random
import json
random.seed(0)
testcases = []
type = [False, False, False, False]
N = [4, 7, 9, 11]
for t,n in zip(type,N):
    A = [random.randint(1,10) for _ in range(n)]
    L = [random.randint(1,10) for _ in range(n)]
    R = [False for _ in range(n)]
    W = min(max(A[i],L[i]) for i in range(n))
    testcases.append({"N": n, "altezze": A, "larghezze": L, "rot": R, "pos": 0, "W": W})
print(json.dumps(list(testcases)))
