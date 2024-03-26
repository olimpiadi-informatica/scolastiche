import random
import json
random.seed(0)
testcases = []
type = [False, True, False]
M = [6, 14, 31]
for t,m in zip(type,M):
    tot = sum(range(1,m+1))
    S = (random.randint(1, tot) + random.randint(1, tot) + random.randint(1, tot) + random.randint(1, tot))//4
    D = tot-S
    testcases.append({"S": S, "D": D, "M": m, "blocchi": [[1,i] for i in range(m)], "pos": [0,0,0,0], "rimasti": m, "orient": 1})
print(json.dumps(list(testcases)))
