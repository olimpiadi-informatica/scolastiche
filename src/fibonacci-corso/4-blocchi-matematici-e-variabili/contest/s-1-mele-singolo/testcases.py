import random
import json
random.seed(0)
testcases = []
for i in range(4):
    N = max(i, 1)
    M = random.randint(4, 8) if i%2 else random.randint(2, 5)
    C = random.randint(1, N*M-1) if i%2 else random.randint(N*M, N*M*2)
    sol = min(N*M, C)
    testcases.append({"N": N, "M": M, "C": C, "sol": sol, "res": 0})
print(json.dumps(list(testcases)))
