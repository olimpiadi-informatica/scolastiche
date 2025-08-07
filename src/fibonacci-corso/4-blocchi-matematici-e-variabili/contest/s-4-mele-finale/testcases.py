import random
import json
random.seed(0)
testcases = []
for i in range(4):
    N = max(i+1, 2)
    M = [random.randint(2, 8) for _ in range(N)]
    tot = sum(M)
    K = random.randint(2, N+1)
    C = [random.randint(1, 2*tot//K) for _ in range(K)]
    sol = min(tot, sum(C))
    testcases.append({"N": N, "M": M, "K": K, "C": C, "tot": tot, "sol": sol, "res": 0, "pos": 0, "basket": 0, "apples": [0 for _ in range(K)]})
print(json.dumps(list(testcases)))
