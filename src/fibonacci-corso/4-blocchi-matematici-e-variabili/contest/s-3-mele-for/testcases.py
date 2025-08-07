import random
import json
random.seed(0)
testcases = []
for i in range(4):
    N = max(i+1, 2)
    M = [random.randint(4, 8) if i%2 else random.randint(2, 5) for _ in range(N)]
    tot = sum(M)
    C = random.randint(1, tot-1) if i%2 else random.randint(tot, tot*2)
    sol = min(tot, C)
    testcases.append({"N": N, "M": M, "C": C, "tot": tot, "sol": sol, "res": 0, "pos": 0})
print(json.dumps(list(testcases)))
