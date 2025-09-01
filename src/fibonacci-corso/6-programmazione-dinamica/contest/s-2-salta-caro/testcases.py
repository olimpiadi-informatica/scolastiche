import random
import json
random.seed(0)
testcases = []
N = [4, 6, 9, 13]
for n in N:
    cost = []
    sol = [0]
    while sum(cost[1::2]) == sol[0]:
        cost = [min(random.randint(1,2+i*8//n), random.randint(1,2+i*8//n)) for i in range(n)] + [0]
        sol = [0]*n + [cost[-2], 0]
        for i in reversed(range(n)):
            sol[i] = min(sol[i+1], sol[i+2]) + cost[i-1]
    testcases.append({"cost": cost, "value": [None]*n, "sol": sol[0], "pos": -1, "flight": 0, "N": n, "count": 0, "start": 0})
print(json.dumps(list(testcases)))
