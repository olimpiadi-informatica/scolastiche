import random
import json
random.seed(0)
testcases = []
N = [4, 5, 7, 10]
for n in N:
    cost = max(random.randint(1, (n+1)//2), random.randint(1, (n-1)//2))
    cost = random.sample(range(n-cost+1), cost)
    cost.sort()
    cost = [i+x for i, x in enumerate(cost)]
    cost = [random.randint(1,9) if i in cost else 0 for i in range(n)]
    testcases.append({"cost": cost, "pos": -1, "flight": 0, "N": n, "count": 0, "start": 0})
print(json.dumps(list(testcases)))
