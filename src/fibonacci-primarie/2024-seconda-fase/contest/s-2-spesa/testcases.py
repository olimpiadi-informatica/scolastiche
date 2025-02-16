import random
import json
random.seed(0)
testcases = []
type = [[1,2], [1], [2], [1,2]]
N = [6, 10, 20, 40]
K = [2, 3, 5, 7]
for t,n,k in zip(type,N,K):
    queue = [2, 1, 2, 2, 2, 1] if n == 6 else random.choices(t, k=n)
    sol = (sum(queue) + k-1) // k
    testcases.append({"N": n, "K": k, "queue": queue, "wealth": [0 for _ in range(n)], "sol": sol, "pos": 0, "carrots": 0, "cost": 0})
print(json.dumps(list(testcases)))
