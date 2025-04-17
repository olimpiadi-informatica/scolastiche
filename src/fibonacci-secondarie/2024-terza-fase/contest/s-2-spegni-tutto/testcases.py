import random
import json
from copy import deepcopy
random.seed(0)
testcases = []
type = [1, 2, 0, 0, 0, 0, 0, 2, 1, 0]
N = [4, 5, 5, 10, 20, 50, 100, 1000, 1000, 1000]

def solve(A):
    c = 0
    for i in range(len(A)):
        if A[i] == 1:
            c += 1
            if i+1<len(A) and A[i+1] == 1:
                A[i+1] = 0
    return c

for t,n in zip(type,N):
    A = [0 for _ in range(n)]
    if t == 0:
        A = [random.randint(0, 1) for _ in range(n)]
    elif t == 1:
        A = [1] * n
    else:
        A[0] = random.randint(0, 1)
        for i in range(1, n):
            A[i] = random.randint(0, 1)
            if A[i - 1] == 1:
                A[i] = 0
    testcases.append({"N": n, "count": 0, "sol": solve(deepcopy(A)), "pos": 0.8, "dir": 1, "light": A, "screwed": [1 for _ in range(n)], "switch": random.choices([0, 1], k=n-1)})
print(json.dumps(list(testcases)))
